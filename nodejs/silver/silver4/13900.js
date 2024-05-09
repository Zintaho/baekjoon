let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

N = +N;
input = input.split(' ').map(BigInt);
let sum = input.reduce((a,b) => a+b);

let output = 0n;

for (let n = 0; n < N; ++n) {
    let k = input[n];
    sum -= k;
    output += k * sum;
}

console.log(output.toString());