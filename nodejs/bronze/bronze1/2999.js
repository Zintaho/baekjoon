let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let len = input.length;
let K = 1;
for (let k = 2; k <= Math.sqrt(len); ++k) {
    if (len % k === 0) K = k;
}

let output = '';
let [A, B] = [K, len/K];
for (let a = 0; a < A; ++a) {
    for (let b = 0; b < B; ++b) {
        output += input[b*A + a];
    }
}
console.log(output);