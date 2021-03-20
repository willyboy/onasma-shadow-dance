const colors = require('./colors');
const colorBytes = {};
for (const i in colors) {
    const x = (colors[i][0] * 65535).toString(16);
    const y = (colors[i][1] * 65535).toString(16);
    colorBytes[i] = [getPart(x, 0, 2), getPart(x, 2, 4), getPart(y, 0, 2), getPart(y, 2, 4)]
}

function getPart(val, start, end) {
    let part = val.slice(start, end).replace('.', '');
    while (part.length < 2) {
        part += "0"
    }
    return '0x' + part;
}

module.exports = colorBytes;