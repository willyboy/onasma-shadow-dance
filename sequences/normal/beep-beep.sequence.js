module.exports = [{
        steps: [{
            lights: [
                { xy: colors.cyan, transitiontime: 1 },
                { xy: colors.red, transition: 1 }
            ],
            duration: 500
        }, {
            lights: [
                { xy: colors.cyan, transitiontime: 1 },
                { xy: colors.red, transitiontime: 1 },
                { xy: colors.cyan, transitiontime: 1 }
            ],
            duration: 500
        }],
        repeats: 21
    },
    {
        steps: [{
            lights: [red, red]
        }],
        repeats: 23
    },
    {
        steps: [{
            lights: [
                { xy: colors.skyblue, transitiontime: 1 },
                offState,
                offState
            ].reverse()
        }, {
            lights: [
                offState,
                { xy: colors.powderblue, transitiontime: 1 },
                offState
            ].reverse()
        }, {
            lights: [
                offState,
                offState,
                { xy: colors.cyan, transitiontime: 1 }
            ].reverse()
        }, {
            lights: [
                offState,
                offState,
                offState
            ],
            duration: 100
        }],
        repeats: 6
    },
    {
        steps: [{
            lights: [
                { xy: colors.orange, transitiontime: 4 },
                offState,
                offState
            ],
            duration: 1400
        }, {
            lights: [
                offState,
                { xy: colors.blue, transitiontime: 4 }
            ],
            duration: 1400
        }],
        repeats: 6
    },
    {
        steps: [{
            lights: [
                { xy: colors.palegoldenrod, transitiontime: 0 },
                { xy: colors.palegoldenrod, transitiontime: 0 },
                { xy: colors.palegoldenrod, transitiontime: 0 }
            ],
            duration: 2000
        }]
    },
    {
        steps: [{
            lights: [offState, offState, offState]
        }]
    }
]