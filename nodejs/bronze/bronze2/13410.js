let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
let nums = new Array(K);
for (let i = 1; i<=K; ++i) {
    let a = +((N * i).toString().split('').reverse().join(''));
    nums[i-1] = a;
}
console.log(Math.max(...nums));