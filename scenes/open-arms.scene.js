const colors = require('../colors');
const offState = { "on": false, transitiontime: 2 };
module.exports = [{
    steps: [{
        lights: [
            { xy: colors.blue, transitiontime: 0, bri: 255 },
            { xy: colors.red, transitiontime: 0, bri: 255 },
            { xy: colors.green, transitiontime: 0, bri: 255 },
            offState
        ],
    }]
}]