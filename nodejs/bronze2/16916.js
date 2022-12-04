let [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [aLen, bLen] = [a.length, b.length];
// Using KMP Algorithm
let pi = new Array(bLen).fill(0);
let j = 0;
for (let i = 1; i < aLen; ++i) {
    while (j > 0 && b[i] != b[j]) j = pi[j-1];
    if (b[i] === b[j]) pi[i] = ++j;
}

j = 0;
let checked = false;
for (let i = 0 ; i < aLen; ++i) {
    while (j > 0 && a[i] !== b[j]) j = pi[j-1];
    if (a[i] === b[j]) {
        if (j === bLen-1) {
            checked = true;
            break;
        } else {
            j++;
        }
    }
}
console.log(checked?1:0);    