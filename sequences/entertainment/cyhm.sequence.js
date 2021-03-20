const colors = require('../../color-bytes');
const drums = {
    steps: [{
        lights: [
            colors.black, [...colors.darkcyan, 50, 50],
            [...colors.darkcyan, 50, 50],
            [...colors.darkcyan, 50, 50],
        ],
        duration: 500,
        tween: {
            interval: 10
        }
    }, {
        lights: [
            null, colors.darkcyan,
            colors.darkcyan,
            colors.darkcyan,
        ],
        duration: 250
    }, {
        lights: [
            null, colors.black,
            colors.black,
            colors.black,
        ],
        duration: 125
    }, {
        lights: [
            null, colors.darkcyan,
            colors.darkcyan,
            colors.darkcyan,
        ],
        duration: 125
    }, {
        lights: [
            null, colors.black,
            colors.black,
            colors.black,
        ],
        duration: 125
    }, {
        lights: [
            null, colors.darkcyan,
            colors.darkcyan,
            colors.darkcyan,
        ],
        duration: 125
    }],
    repeats: 200
}
const drums2 = {
    steps: [{
        lights: [
            null, colors.darkcyan,
            colors.darkcyan,
            colors.darkcyan,
        ],
        duration: 3000
    }]
}
const countdown = {
    steps: [{
            lights: [
                colors.cadetblue,
                colors.black,
                colors.black,
                colors.black
            ],
            duration: 500
        },
        {
            lights: [
                colors.black,
                colors.red,
                colors.black,
                colors.black
            ],
            duration: 500
        },
        {
            lights: [
                colors.black,
                colors.black,
                colors.green,
                colors.black
            ],
            duration: 500
        }
    ]
};
const randoBlinkies = {
        steps: [{
            lights: [
                colors.black,
                colors.purple,
                colors.red,
                colors.orange
            ],
            tween: {
                interval: 10
            },
            duration: 1000
        }, {
            lights: [
                colors.black, [...colors.magenta, 127, 0],
                colors.pink, [...colors.white, 127, 0]
            ],
            tween: {
                interval: 10
            },
            duration: 1000
        }, {
            lights: [
                colors.black, [...colors.blue, 180, 0],
                colors.honeydew, [...colors.dimgrey, 220, 0]
            ],
            tween: {
                interval: 10
            },
            duration: 1000
        }],
        repeats: 20
    }
    // need to figure logarithmic
    // module.exports = [{
    //     steps: [{
    //         lights: [
    //             colors.black, [...colors.darkcyan, 255, 0],
    //             colors.black, [...colors.darkcyan, 255, 0],
    //         ],
    //         duration: 3000, //49
    //         tween: {
    //             interval: 1
    //         }
    //     }, {
    //         lights: [
    //             colors.black, [...colors.darkcyan, 0, 0],
    //             colors.black, [...colors.darkcyan, 0, 0],
    //         ],
    //         duration: 2000, //49
    //         tween: {
    //             interval: 5
    //         }
    //     }, {
    //         lights: [
    //             colors.black,
    //             colors.darkcyan,
    //             colors.black,
    //             colors.darkcyan,
    //         ],
    //         duration: 2000 //1:06
    //     }],
    //     repeats: 100
    // }];
    // figure this out
    // module.exports = [{
    //     steps: [{
    //             lights: [
    //                 colors.black, [...colors.red, 0, 0],
    //                 colors.black, [...colors.darkcyan, 255, 0]
    //             ],
    //             tween: {
    //                 interval: 2
    //             },
    //             duration: 2500 //1:12
    //         },
    //         {
    //             lights: [
    //                 colors.black, [...colors.red, 255, 0],
    //                 colors.black, [...colors.darkcyan, 0, 0]
    //             ],
    //             duration: 2500, //1:15
    //             tween: {
    //                 interval: 2
    //             }
    //         },
    //         {
    //             lights: [
    //                 colors.black, [...colors.red, 0, 0],
    //                 colors.black, [...colors.darkcyan, 255, 0]
    //             ],
    //             duration: 2500, //1:25,
    //             tween: {
    //                 interval: 2
    //             }
    //         },
    //         {
    //             lights: [
    //                 colors.black, [...colors.red, 255, 0],
    //                 colors.black, [...colors.darkcyan, 0, 0]
    //             ],
    //             duration: 2500, //1:15
    //             tween: {
    //                 interval: 2
    //             }
    //         }
    //     ],
    //     //repeats: 21
    // }];
module.exports = [
    countdown,
    {
        steps: [{
                lights: [
                    colors.blue,
                    colors.red,
                    colors.green,
                    colors.black
                ],
                duration: 26000 // :26
            },
            {
                lights: [
                    colors.blue,
                    colors.red,
                    colors.green, [...colors.green, 0, 0]
                ],
                duration: 6500, //:32.5
                tween: {
                    interval: 2
                }
            }, {
                lights: [
                    [...colors.blue, 0, 0],
                    [...colors.red, 0, 0],
                    [...colors.green, 0, 0],
                    colors.green
                ],
                duration: 1500 // :34
            }, {
                lights: [
                    colors.black,
                    colors.black,
                    colors.black,
                    colors.green
                ],
                duration: 5000, // :39
                tween: {
                    interval: 5
                }
            }, {
                lights: [
                    colors.black, [...colors.red, 0, 0],
                    colors.black,
                    colors.green
                ],
                duration: 9000 // :48
            }, {
                lights: [
                    colors.black,
                    colors.black,
                    colors.black,
                    colors.black
                ],
                duration: 1500 // :49.5
            },
            // only needs to transition to 2/4 before grab, keep at 2/3
            {
                lights: [
                    colors.black,
                    colors.darkcyan,
                    colors.black,
                    colors.darkcyan,
                ],
                duration: 15500, //1:03
            },
            {
                lights: [
                    colors.black,
                    colors.darkcyan,
                    colors.black,
                    colors.darkcyan,
                ],
                duration: 7500, //1:13
                tween: {
                    interval: 1
                }
            },
            {
                lights: [
                    colors.black, [...colors.darkcyan, 0, 0],
                    colors.black, [...colors.darkcyan, 0, 0],
                ],
                duration: 500, //1:12
                // tween: {
                //     interval: 5
                // }
            }
            // {
            //     lights: [
            //         colors.black,
            //         colors.darkcyan,
            //         colors.black,
            //         colors.darkcyan,
            //     ],
            //     duration: 16000 //1:06
            // }
        ]
    },
    {
        steps: [{
                lights: [
                    colors.black, [...colors.chrysalispink, 150, 0],
                    colors.darkcyan,
                    colors.black
                ],
                tween: {
                    interval: 2
                },
                duration: 6000 //1:12
            },
            {
                lights: [
                    colors.black,
                    colors.chrysalispink, [...colors.darkcyan, 150, 0],
                    colors.black
                ],
                duration: 2500, //1:15
                tween: {
                    interval: 2
                }
            },
            {
                lights: [
                    colors.black, [...colors.chrysalispink, 150, 0],
                    colors.darkcyan,
                    colors.black
                ],
                duration: 2500, //1:25,
                tween: {
                    interval: 2
                }
            },
            {
                lights: [
                    colors.black,
                    colors.chrysalispink, [...colors.darkcyan, 150, 0],
                    colors.black
                ],
                duration: 2500, //1:15
                tween: {
                    interval: 2
                }
            },
            // aboce is a repeat
            {
                lights: [
                    colors.black,
                    colors.darkcyan, [...colors.chrysalispink, 100, 0],
                    colors.black
                ],
                duration: 2000 //1:27
            }, {
                lights: [
                    colors.black,
                    colors.black,
                    colors.black,
                    colors.black
                ],
                duration: 1000
            }, {
                lights: [
                    colors.black,
                    colors.darkcyan,
                    colors.darkcyan,
                    colors.darkcyan
                ],
                duration: 3000
            }
        ]
    },
    randoBlinkies,
    drums2
]