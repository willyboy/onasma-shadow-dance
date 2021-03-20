module.exports = [{
    steps: [{
        lights: [colors.black,
            colors.deeppink,
            colors.black,
            colors.black
        ],
        duration: 2500
    }],
    repeats: 2
}, {
    steps: [{
            lights: [
                colors.black,
                colors.deeppink,
                colors.black,
                colors.black
            ],
            duration: 500
        },
        {
            lights: [
                colors.black,
                colors.deeppink,
                colors.deeppink,
                colors.black
            ],
            duration: 500
        }
    ],
    repeats: 20
}];