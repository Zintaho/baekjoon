let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let sum = 0;
for (let i = 1; i <= N; ++i) {
    let [C, K] = input[i].split(' ').map(x=>+x);
    sum += (C*K);
}
console.log(sum);