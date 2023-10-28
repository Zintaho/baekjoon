let n = +require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = 1;
let K = 1_000_000_000_000;
for (let i = 2; i <= n; ++i) {
    output = (output * i);
    while (output % 10 === 0) output /= 10;
    output %= K;
}
console.log(output.toString().slice(-5));