const { dtls } = require("node-dtls-client");
var player = require('play-sound')(opts = {})
const { exec } = require("child_process");

const { entertainmentMode: { user, pass, port }, address } = require("./config");
const req = require('request');
const colors = require('./color-bytes');
const beepBeepSeq = require('./sequences/entertainment/cyhm.sequence');
const cyhm = volumeToBrightness(require('./cyhm.json'));
const processBrightness = require('./process-brightness');
const processTweens = require('./process-tweens');
let runAtTime = 0;
const options = {
    type: "udp4",
    address: address,
    port: port,
    psk: {
        [user]: new Buffer(pass, 'hex')
    },
    timeout: 30000, // in ms, optional, minimum 100, default 1000
    ciphers: ["TLS_PSK_WITH_AES_128_GCM_SHA256"] // optional array of (D)TLS cipher suites, e.g. ["TLS_PSK_WITH_AES_128_CCM"]
};
async function run() {
    await startStream();
    const socket = dtls
        // create a socket and initialize the secure connection
        .createSocket(options /* DtlsOptions */ )
        // subscribe events
        .on("connected", () => {
            runSequence(beepBeepSeq, socket)

            // Play Audio
            setTimeout(() => {
                exec('afplay cyhm.m4a -r .5')
                    // player.play("cyhm.m4a", (err) => {
                    //     if (err) {
                    //         console.log(err)
                    //     }
                    //     console.log('done')
                    // });
            }, 1500)

            // heartbeat to ensure we maintain the connection
            setInterval(() => {
                setLights(socket);
            }, 5000);

        })
        .on("error", (e /* Error */ ) => { console.error(e, 'error') })
        .on("message", (msg /* Buffer */ ) => { console.log(msg, 'msg') })
        .on("close", () => { console.log('closed') });
}

function runSequence(sequence, socket) {
    sequence = processBrightness(sequence);
    sequence = processTweens(sequence);
    sequence.forEach((settings) => {
        for (let i = 0; i < (settings.repeats || 1); i++) {
            settings.steps.forEach(step => {
                ((runAtTime) => {
                    setTimeout(() => {
                        const lightCommand = [];
                        step.lights.forEach((light, index) => {
                            if (light) {
                                // this sets the number of the light
                                lightCommand.push(0x00, 0x00, '0x0' + (index + 1));

                                lightCommand.push(...light);
                            }
                        });
                        setLights(socket, lightCommand);
                    }, runAtTime);
                })(runAtTime)

                runAtTime += step.duration || 1000;
            });

        }

    });
}

function setLights(socket, lights = []) {
    socket.send(Buffer.concat([
        Buffer.from("HueStream", "ascii"),
        Buffer.from([
            0x01, 0x00, //version 1.0
            0x00, //sequence number 7
            0x00, 0x00, //Reserved write 0’s
            0x01, //color mode RGB
            0x00, // Reserved, write 0’s
            ...lights
        ])
    ]));
}

async function killStream() {
    return new Promise((resolve, reject) => {
        req({
            url: `https://${address}/api/${user}/groups/8`,
            method: 'PUT',
            json: true,
            rejectUnauthorized: false,
            body: { "stream": { "active": false } },
            contentType: 'application/json'
        }, (err, res) => {
            console.error(err);
            console.log("Stream closed.");
            resolve();
        });
    });
}
async function startStream() {
    return new Promise((resolve, reject) => {
        req({
            url: `https://${address}/api/${user}/groups/8`,
            method: 'PUT',
            json: true,
            rejectUnauthorized: false,
            body: { "stream": { "active": true } },
            contentType: 'application/json'
        }, (err, res) => {
            if (!err) {
                resolve(res.body)
            } else {
                reject(err)
            }
        });
    });
}

function volumeToBrightness(volumeData) {
    const MAX_BRIGHTNESS = 254;
    const maxBrightRatio = (Math.ceil(Math.max.apply(this, volumeData) / 100) * 100) / MAX_BRIGHTNESS;
    return volumeData.map((volume) => Math.floor((Math.ceil(volume / 100) * 100) / maxBrightRatio))
}
//run()

process.on('SIGINT', async() => {
    await killStream();
    process.exit();
});


/*

// assumes volume data given in quarter second intervals
//light.bri = Math.max(150, cyhm[runAtTime / 250]);

//console.log(light.bri, cyhm[runAtTime / 250], runAtTime)
// const brightness = (Math.max(150, cyhm[Math.round(runAtTime / 250)])).toString(16)
                                    // bri = ['0x' + brightness.slice(0, 2), '0x00'];
//console.log(bri, cyhm[Math.round(runAtTime / 250)], runAtTime / 250)
*/