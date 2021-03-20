const colors = require('./color-bytes');
const { isEqual } = require('lodash');
module.exports = (sequence) => {
    sequence = JSON.parse(JSON.stringify(sequence));
    sequence.forEach((settings) => {
        settings.steps.forEach((step, stepIndex) => {
            step.lights.forEach((light, index) => {
                // set the default brightness
                if (isEqual(light, colors.black)) {
                    light.push(0x00, 0);
                } else if (light && light.length != 6) {
                    light.push(0xFE, 0);
                }
            });
        });
    });
    return sequence;
}