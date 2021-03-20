const colors = require('../../colors');
const offState = { "on": false, transitiontime: 2 };
const offStateNoDelay = { "on": false, transitiontime: 0 };
const increasePulse = require('./increase-pulse.sequence')[0].steps;
const countdown = [{
        lights: [
            { xy: colors.cadetblue, transitiontime: 0, bri: 255 },
            offState,
            offState,
            offState,
            offState
        ],
        duration: 500
    },
    {
        lights: [
            offState,
            { xy: colors.red, transitiontime: 0, bri: 255 },
            offState,
            offState,
        ],
        duration: 500
    },
    {
        lights: [
            offState,
            offState,
            { xy: colors.green, transitiontime: 0, bri: 255 },
            offState,
        ],
        duration: 500
    }
];
module.exports = [{
    steps: [{
            lights: [
                offStateNoDelay,
                offStateNoDelay,
                offStateNoDelay,
                offStateNoDelay,
                offStateNoDelay,
                offStateNoDelay
            ],
            duration: 65
        }, ...countdown, {
            lights: [
                offStateNoDelay,
                offStateNoDelay,
                offStateNoDelay,
                offStateNoDelay,
                offStateNoDelay,
                offStateNoDelay
            ],
            duration: 65
        },
        {
            lights: [
                { xy: colors.blue, transitiontime: 50, bri: 255 },
                { xy: colors.red, transitiontime: 50, bri: 255 },
                { xy: colors.green, transitiontime: 50, bri: 255 },
                offState
            ],
            song: 'cyhm.m4a',
            duration: 26000
        },
        {
            lights: [
                offState,
                { xy: colors.chrysalispink, transitiontime: 20, bri: 255 },
                { xy: colors.deeppink, transitiontime: 20, bri: 255 },
                null
            ],
            duration: 6000 //32
        }, {
            lights: [
                null,
                offState,
                { xy: colors.chrysalispink, transitiontime: 1, bri: 255 },
                offState
            ],
            duration: 5000 //37
        }, {
            lights: [
                null,
                null,
                { xy: colors.chrysalispink, transitiontime: 5, bri: 255 },
                { xy: colors.chrysalispink, transitiontime: 5, bri: 255 },
            ],
            duration: 4000 //41
        }, {
            lights: [
                offState,
                offState,
                offState,
                offState
            ],
            duration: 2000 //43
        }, {
            lights: [
                null,
                null,
                { xy: colors.chrysalispink, transitiontime: 1, bri: 255 },
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
            ],
            duration: 19000 //62
        }, {
            lights: [
                null,
                null,
                { xy: colors.darkcyan, transitiontime: 30, bri: 0 },
                { xy: colors.chrysalispink, transitiontime: 30, bri: 0 },
            ],
            duration: 3000 //65
        }, {
            lights: [
                null,
                null,
                offState,
                offState,
            ],
            duration: 500 //65.5
        }, {
            lights: [
                { xy: colors.chrysalispink, transitiontime: 1, bri: 255 },
                null,
                null,
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
                { xy: colors.darkred, transitiontime: 1, bri: 255 },
            ],
            duration: 12500 //78
        }, {
            lights: [
                null,
                null,
                null,
                null,
                { "on": false, transitiontime: 5 }
            ],
            duration: 20
        }, {
            lights: [
                { "on": false, transitiontime: 5 },
                { xy: colors.red, transitiontime: 1, bri: 255 },
                offState,
                { xy: colors.green, transitiontime: 1, bri: 255 },
                { "on": false, transitiontime: 5 }
            ],
            duration: 9000 //87
        }, {
            lights: [
                offState,
                { xy: colors.bisque, transitiontime: 1, bri: 255 },
                offState,
                { xy: colors.slategrey, transitiontime: 1, bri: 255 },
            ],
            duration: 14000 //101
        }, {
            lights: [
                offState,
                { xy: colors.red, transitiontime: 1, bri: 255 },
                { xy: colors.blue, transitiontime: 1, bri: 255 },
                { xy: colors.green, transitiontime: 1, bri: 255 },
            ],
            duration: 8000 //109
        }, {
            lights: [
                offState,
                { xy: colors.red, transitiontime: 1, bri: 255 },
                { xy: colors.blue, transitiontime: 1, bri: 255 },
                { xy: colors.red, transitiontime: 1, bri: 255 },
            ],
            duration: 8000 //117
        }, {
            lights: [
                null,
                { xy: colors.darkblue, transitiontime: 1, bri: 255 },
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
                { xy: colors.darkslateblue, transitiontime: 1, bri: 255 },
            ],
            duration: 1000 //118
        }, {
            lights: [
                null,
                { xy: colors.darkblue, transitiontime: 0, bri: 125 },
                { xy: colors.darkcyan, transitiontime: 0, bri: 125 },
                { xy: colors.darkslateblue, transitiontime: 0, bri: 125 },
            ],
            duration: 1000 //119
        }, {
            lights: [
                null,
                { xy: colors.darkslateblue, transitiontime: 1, bri: 255 },
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
                { xy: colors.darkblue, transitiontime: 1, bri: 255 },
            ],
            duration: 1000 //120
        }, {
            lights: [
                null,
                { xy: colors.darkslateblue, transitiontime: 0, bri: 125 },
                { xy: colors.darkcyan, transitiontime: 0, bri: 125 },
                { xy: colors.darkblue, transitiontime: 0, bri: 125 },
            ],
            duration: 1000 //121
        }, {
            lights: [
                null,
                { xy: colors.darkblue, transitiontime: 1, bri: 255 },
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
                { xy: colors.darkslateblue, transitiontime: 1, bri: 255 },
            ],
            duration: 1000 //122
        }, {
            lights: [
                null,
                { xy: colors.darkblue, transitiontime: 0, bri: 125 },
                { xy: colors.darkcyan, transitiontime: 0, bri: 125 },
                { xy: colors.darkslateblue, transitiontime: 0, bri: 125 },
            ],
            duration: 1000 //123
        }, {
            lights: [
                null,
                { xy: colors.darkslateblue, transitiontime: 1, bri: 255 },
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
                { xy: colors.darkblue, transitiontime: 1, bri: 255 },
            ],
            duration: 1000 //124
        }, {
            lights: [
                null,
                { xy: colors.darkslateblue, transitiontime: 0, bri: 125 },
                { xy: colors.darkcyan, transitiontime: 0, bri: 125 },
                { xy: colors.darkblue, transitiontime: 0, bri: 125 },
            ],
            duration: 1000 //125
        }, {
            lights: [
                null,
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
                { xy: colors.red, transitiontime: 1, bri: 255 },
            ],
            duration: 1000 // 126
        }, {
            lights: [
                null,
                { xy: colors.darkcyan, transitiontime: 1, bri: 0 },
                { xy: colors.darkcyan, transitiontime: 1, bri: 0 },
                { xy: colors.darkcyan, transitiontime: 1, bri: 0 },
            ],
            duration: 1000 // 127
        }, {
            lights: [
                null,
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
            ],
            duration: 1000 // 128
        }, {
            lights: [
                null,
                { xy: colors.darkcyan, transitiontime: 1, bri: 0 },
                { xy: colors.darkcyan, transitiontime: 1, bri: 0 },
                { xy: colors.darkcyan, transitiontime: 1, bri: 0 },
            ],
            duration: 1000 // 129
        }, {
            lights: [
                null,
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
                offState
            ],
            duration: 1000 // 130
        }, {
            lights: [
                null,
                null,
                null,
                null,
                offState
            ],
            duration: 20
        }, {
            lights: [
                offState,
                { xy: colors.blue, transitiontime: 10, bri: 255 },
                { xy: colors.red, transitiontime: 10, bri: 255 },
                offState,
                offState
            ],
            duration: 5000 //135
        }, {
            lights: [
                offState,
                { xy: colors.red, transitiontime: 20, bri: 255 },
                { xy: colors.blue, transitiontime: 20, bri: 255 },
                offState,
            ],
            duration: 16000 //151
        }, { //flashing
            lights: [
                offState,
                { xy: colors.red, transitiontime: 1, bri: 255 },
                { xy: colors.blue, transitiontime: 1, bri: 255 },
                { xy: colors.green, transitiontime: 1, bri: 255 },
            ],
            duration: 18000 //169
        }, ...increasePulse /*175*/ , { //flashing
            lights: [
                offState,
                { xy: colors.darkcyan, transitiontime: 1, bri: 255 },
                { xy: colors.blue, transitiontime: 1, bri: 255 },
                { xy: colors.purple, transitiontime: 1, bri: 255 },
            ],
            duration: 11000 //186
        },
        {
            lights: [
                offState,
                { xy: colors.red, transitiontime: 1, bri: 255 },
                { xy: colors.blue, transitiontime: 1, bri: 255 },
                offState,
            ],
            duration: 10000 //196
        }, {
            lights: [
                offState,
                offState,
                { xy: colors.blue, transitiontime: 1, bri: 255 },
                offState,
            ],
            duration: 3000 //199
        }, {
            lights: [
                offState,
                { xy: colors.darkcyan, transitiontime: 20, bri: 255 },
                { xy: colors.blue, transitiontime: 1, bri: 255 },
                offState
            ],
            duration: 1000 // 200
        }, {
            lights: [
                offState,
                { xy: colors.darkcyan, transitiontime: 20, bri: 255 },
                { xy: colors.blue, transitiontime: 1, bri: 255 },
                { xy: colors.purple, transitiontime: 20, bri: 255 },
            ],
            duration: 9000 // 209
        }, {
            lights: [
                null,
                null,
                { xy: colors.black, transitiontime: 50, bri: 255 },
                null,
            ],
            duration: 9000 // 218
        }
    ],
}]