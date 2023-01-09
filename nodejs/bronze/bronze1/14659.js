let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let max = 0;
let nums = input[1].split(' ').map(x=>+x);
for (let i = 0; i < N-1; ++i) {
    if (max >= N - i) break;
    let [k, cnt] = [nums[i], 0];
    for (let j = i+1; j < N; ++j) {
        if (k < nums[j]) break;
        ++cnt;
    }
    if (cnt > max) max = cnt;
}
console.log(max);
 