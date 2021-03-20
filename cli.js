const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const fs = require('fs');
const chalk = require('chalk');
const nativeConsoleError = console.error;
console.error = (...args) => {
    nativeConsoleError(chalk.red.apply(null, args))
}

const { song, sequence, scene, apiType } = yargs(hideBin(process.argv))
    .option('scene', {
        alias: 'sc',
        type: 'string',
        description: 'The path to the scene setup file'
    })
    .option('sequence', {
        alias: 'sq',
        type: 'string',
        description: 'The path to the sequence you want to run'
    })
    .option('apiType', {
        alias: 'api',
        type: 'string',
        default: 'normal',
        choices: ['normal', 'entertainment', 'n', 'e'],
        coerce: (arg) => {
            switch (arg) {
                case 'n':
                    return 'normal'
                case 'e':
                    return 'entertainment'
                default:
                    return arg
            }
        }
    }).conflicts('sequence', 'scene')
    .argv

if (apiType === 'normal') {
    // make sure the config is set up
    require('./user')().then(() => {
        const normalRunner = require('./run-normal');
        let path = '';
        if (scene) {
            path = `scenes/${scene}.scene`;
        } else {
            path = `sequences/${apiType}/${sequence}.sequence`
        }
        normalRunner(path, song);
    }).catch(err => console.error(err));

} else {
    if (!fs.existsSync('./config.js')) {
        throw "Entertainment mode needs to be set up manually in the config. Support for auto-setup is coming soon.";
    }
    const entertainmentRunner = require('./run-entertainment');
}