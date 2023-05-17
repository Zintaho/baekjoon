let [s, word] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [sl, sr] = [s[0], s[2]];
let result = word.length;
let keyboardL = {};
let keyboardR = {};
let L = [
    ['z','x','c','v'],
    ['a','s','d','f','g'],
    ['q','w','e','r','t']
]
let R = [
    ['b','n','m'],
    ['','h','j','k','l'],
    ['','y','u','i','o','p']
]
for (let y = 0; y < 3; ++y) {
    let row = L[y];
    for (let x = 0; x < row.length; ++x) {
        keyboardL[row[x]] = [x,y];
    }
    row = R[y];
    for (let x = 0; x < row.length; ++x) {
        keyboardR[row[x]] = [x,y];
    }
}
for (let c of word) {
    let a, b;
    if (c in keyboardL) {
        a = keyboardL[sl];
        b = keyboardL[c];
        sl = c;
    } else {
        a = keyboardR[sr];
        b = keyboardR[c];
        sr = c;
    }
    let [x1, y1, x2, y2] = [a[0], a[1], b[0], b[1]];
    result += (Math.abs(x2-x1) + Math.abs(y2-y1));
}
console.log(result);