const {get, cloneDeep } = require('lodash');
module.exports = (sequence) => {
    sequence = cloneDeep(sequence);

    sequence.forEach((settings) => {
        for (let stepIndex = 0; stepIndex < settings.steps.length; stepIndex++) {
            const step = settings.steps[stepIndex]
            if (step.tween) {
                console.log('tweeny')
                const starterStep = cloneDeep(step);
                starterStep.duration = 1;
                const newSteps = [starterStep]
                step.lights.forEach((light, lightIndex) => {
                    const nextLight = get(settings, `steps[${stepIndex + 1}].lights[${lightIndex}]`)
                    if (nextLight) {
                        const brightnessDiff = nextLight[4] - light[4];
                        const numberOfNewSteps = Math.abs(Math.ceil(brightnessDiff / step.tween.interval));
                        console.log(numberOfNewSteps, brightnessDiff, 'nnn')
                        for (let i = 1; i <= numberOfNewSteps; i++) {
                            if (!newSteps[i]) {
                                newSteps[i] = {
                                    lights: [],
                                    duration: Math.floor(step.duration / numberOfNewSteps)
                                }
                            }
                            // brightnessDiff/brightnessDiff gives us the -/+ without checking greater or less than 0
                            let brightness = light[4] + step.tween.interval * (brightnessDiff < 0 ? -1 : 1);
                            if (brightness < 0) {
                                brightness = 0;
                            } else if (brightness > 255) {
                                brightness = 255;
                            }
                            light.splice(4, 1, brightness);
                            newSteps[i].lights[lightIndex] = [...light];
                        }
                    }
                });
                // need to modify a clone because this splice causes forEach fuckup
                settings.steps.splice(stepIndex, 1, ...newSteps);
                stepIndex += newSteps.length;
            }
        }
    });
    console.log(JSON.stringify(sequence, null, 4))
    return sequence;
}