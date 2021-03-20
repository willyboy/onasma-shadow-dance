const colors = require('../../colors');
const offState = { "on": false, transitiontime: 2 };
module.exports = [{
    steps: [{
        lights: [
            offState,
            { xy: colors.red, transitiontime: 1, bri: 50 },
            { xy: colors.blue, transitiontime: 1, bri: 50 },
            { xy: colors.green, transitiontime: 1, bri: 50 },
        ],
        duration: 500
    }, {
        lights: [
            offState,
            { xy: colors.red, transitiontime: 1, bri: 255 },
            { xy: colors.blue, transitiontime: 1, bri: 50 },
            { xy: colors.green, transitiontime: 1, bri: 50 },
        ],
        duration: 500
    }, {
        lights: [
            offState,
            { xy: colors.red, transitiontime: 1, bri: 255 },
            { xy: colors.blue, transitiontime: 1, bri: 255 },
            { xy: colors.green, transitiontime: 1, bri: 50 },
        ],
        duration: 500
    }, {
        lights: [
            offState,
            { xy: colors.red, transitiontime: 1, bri: 255 },
            { xy: colors.blue, transitiontime: 1, bri: 255 },
            { xy: colors.green, transitiontime: 1, bri: 255 },
        ],
        duration: 500
    }, {
        lights: [
            offState,
            { xy: colors.red, transitiontime: 1, bri: 50 },
            { xy: colors.blue, transitiontime: 1, bri: 255 },
            { xy: colors.green, transitiontime: 1, bri: 255 },
        ],
        duration: 500
    }, {
        lights: [
            offState,
            { xy: colors.red, transitiontime: 1, bri: 50 },
            { xy: colors.blue, transitiontime: 1, bri: 50 },
            { xy: colors.green, transitiontime: 1, bri: 255 },
        ],
        duration: 500
    }, {
        lights: [
            offState,
            { xy: colors.red, transitiontime: 1, bri: 50 },
            { xy: colors.blue, transitiontime: 1, bri: 50 },
            { xy: colors.green, transitiontime: 1, bri: 50 },
        ],
        duration: 500
    }],
    repeats: 20
}]