const req = require('request');
const { exec } = require("child_process");
const { normalMode: { user }, address } = require('./config');
const fs = require('fs');
let runAtTime = 0;

function runSequence(sequencePath) {
    const sequence = require('./' + sequencePath);
    sequence.forEach((settings) => {
        for (let i = 0; i < (settings.repeats || 1); i++) {
            settings.steps.forEach(step => {
                ((runAtTime) => {
                    setTimeout(() => {
                        if (step.song) {
                            if (!fs.existsSync(step.song)) {
                                console.error(`***********
Song file (${step.song}) not found locally. 
Songs are not included in the repo and need to be downloaded manually.
************`);
                            }
                            exec('afplay ' + step.song)
                        }
                        step.lights.forEach((light, index) => {
                            if (light) {
                                setTimeout(() => {
                                    setLight(index, light);
                                }, 10);

                            }
                        })
                    }, runAtTime);
                })(runAtTime)
                runAtTime += step.duration || 1000;
            });
        }
    });
}



function volumeToBrightness(volumeData) {
    const MAX_BRIGHTNESS = 254;
    const maxBrightRatio = (Math.ceil(Math.max.apply(this, volumeData) / 100) * 100) / MAX_BRIGHTNESS;
    return volumeData.map((volume) => Math.floor((Math.ceil(volume / 100) * 100) / maxBrightRatio))
}

function setLight(light, body) {
    light++; // 0 based needs to be 1 based
    //console.log(light, body.xy)
    body = Object.assign({ "on": true, transitiontime: 0 }, body);
    //console.log(body)
    req({
        url: `https://${address}/api/${user}/lights/${light}/state`,
        method: 'PUT',
        json: true,
        rejectUnauthorized: false,
        body: body,
        contentType: 'application/json'
    }, (err, res) => {
        if (err) {
            console.log(err)
        }

    })
}
module.exports = runSequence;