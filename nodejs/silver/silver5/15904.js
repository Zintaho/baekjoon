let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let re = RegExp(/[a-z ]/g);
input = input.replace(re, '');
function ucpc(str) {
    const UCPC = 'UCPC';
    let offset = 0;
    for(let c of str) {
        if (c === UCPC[offset]) ++offset;
        if (offset === 4) break;
    }
    return offset === 4;
}
console.log(`I ${ucpc(input)?"love":"hate"} UCPC`);