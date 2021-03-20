const colors = require('../../colors');
const offState = { "on": false, transitiontime: 2 };
module.exports = [{
    steps: [{ //flashing
        lights: [
            offState,
            { xy: colors.orange, transitiontime: 1, bri: 0 },
            { xy: colors.blue, transitiontime: 0, bri: 255 },
            { xy: colors.orange, transitiontime: 1, bri: 0 },
        ],
        duration: 500 //187
    }, { //flashing
        lights: [
            offState,
            { xy: colors.orange, transitiontime: 5, bri: 255 },
            { xy: colors.blue, transitiontime: 0, bri: 255 },
            { xy: colors.orange, transitiontime: 5, bri: 0 },
        ],
        duration: 500 //187
    }, { //flashing
        lights: [
            offState,
            { xy: colors.orange, transitiontime: 5, bri: 0 },
            { xy: colors.blue, transitiontime: 0, bri: 255 },
            { xy: colors.orange, transitiontime: 5, bri: 255 },
        ],
        duration: 500 //187
    }, { //flashing
        lights: [
            offState,
            { xy: colors.orange, transitiontime: 4, bri: 255 },
            { xy: colors.blue, transitiontime: 0, bri: 255 },
            { xy: colors.orange, transitiontime: 4, bri: 0 },
        ],
        duration: 500 //187
    }, { //flashing
        lights: [
            offState,
            { xy: colors.orange, transitiontime: 4, bri: 0 },
            { xy: colors.blue, transitiontime: 0, bri: 255 },
            { xy: colors.orange, transitiontime: 4, bri: 255 },
        ],
        duration: 500 //187
    }, { //flashing
        lights: [
            offState,
            { xy: colors.orange, transitiontime: 3, bri: 255 },
            { xy: colors.blue, transitiontime: 0, bri: 255 },
            { xy: colors.orange, transitiontime: 3, bri: 0 },
        ],
        duration: 500 //187
    }, { //flashing
        lights: [
            offState,
            { xy: colors.orange, transitiontime: 3, bri: 0 },
            { xy: colors.blue, transitiontime: 0, bri: 255 },
            { xy: colors.orange, transitiontime: 3, bri: 255 },
        ],
        duration: 500 //187
    }, { //flashing
        lights: [
            offState,
            { xy: colors.orange, transitiontime: 2, bri: 255 },
            { xy: colors.blue, transitiontime: 0, bri: 255 },
            { xy: colors.orange, transitiontime: 2, bri: 0 },
        ],
        duration: 500 //187
    }, { //flashing
        lights: [
            offState,
            { xy: colors.orange, transitiontime: 2, bri: 0 },
            { xy: colors.blue, transitiontime: 0, bri: 255 },
            { xy: colors.orange, transitiontime: 2, bri: 255 },
        ],
        duration: 500 //187
    }, { //flashing
        lights: [
            offState,
            { xy: colors.orange, transitiontime: 1, bri: 255 },
            { xy: colors.blue, transitiontime: 0, bri: 255 },
            { xy: colors.orange, transitiontime: 1, bri: 0 },
        ],
        duration: 500 //187
    }, { //flashing
        lights: [
            offState,
            { xy: colors.orange, transitiontime: 1, bri: 0 },
            { xy: colors.blue, transitiontime: 0, bri: 255 },
            { xy: colors.orange, transitiontime: 1, bri: 255 },
        ],
        duration: 500 //187
    }, { //flashing
        lights: [
            offState,
            { xy: colors.orange, transitiontime: 0, bri: 255 },
            { xy: colors.blue, transitiontime: 0, bri: 255 },
            { xy: colors.orange, transitiontime: 0, bri: 255 },
        ],
        duration: 500 //187
    }],
    repeats: 100
}];