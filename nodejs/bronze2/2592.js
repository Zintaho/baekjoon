let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>parseInt(x, 10));
let sum = 0;
let map = {};
for (let x of input) {
    if (x in map) map[x] += 1;
    else map[x] = 1;
    sum += x;
}

let modeMax = 0;
let mode = 0;
for (let [k,v] of Object.entries(map)) {
    if (v > modeMax) {
        mode = k;
        modeMax = v;
    }
}
console.log(sum / 10);
console.log(mode);