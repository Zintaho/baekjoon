let n = +require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = 1;
let K = 1000000;
for (let i = 2; i <= n; ++i) {
    let j = i % K;
    output = (output * j);
    while (output % 10 === 0) output /= 10;
    output %= K;
}
console.log(output%10);