const colors = require('../../color-bytes');
module.exports = [{
        steps: [{
            lights: [
                colors.cyan,
                colors.red
            ],
            duration: 500,
            // tween: {
            //     interval: 10
            // }
        }, {
            lights: [
                colors.red,
                colors.cyan,
            ],
            duration: 500
        }],
        repeats: 21
    },
    {
        steps: [{
            lights: [colors.red, colors.red]
        }],
        repeats: 23
    },
    {
        steps: [{
            lights: [
                colors.skyblue,
                colors.black,
                colors.black
            ].reverse()
        }, {
            lights: [
                colors.black,
                colors.powderblue,
                colors.black
            ].reverse()
        }, {
            lights: [
                colors.black,
                colors.black,
                colors.cyan,
            ].reverse()
        }, {
            lights: [
                colors.black,
                colors.black,
                colors.black
            ],
            duration: 100
        }],
        repeats: 6
    },
    {
        steps: [{
            lights: [
                colors.orange,
                colors.black,
                colors.black
            ],
            duration: 1400
        }, {
            lights: [
                colors.black,
                colors.blue
            ],
            duration: 1400
        }],
        repeats: 6
    },
    {
        steps: [{
            lights: [
                colors.palegoldenrod,
                colors.palegoldenrod,
                colors.palegoldenrod,
            ],
            duration: 2000
        }]
    },
    {
        steps: [{
            lights: [colors.black, colors.black, colors.black]
        }]
    }
]