let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(x=>parseInt(x, 10));
let minDiff = M;
let answer = 0;
let nums = input[1].split(' ').map(x=>parseInt(x, 10));
// 최대 경우의 수  100C3 = 323,400
// 최대 합 900,000
for (let a = 0; a < N-2; ++a) {
    for (let b = a+1 ; b < N-1; ++b) {
        for (let c = b+1; c < N; ++c) {
            let sum = nums[a] + nums[b] + nums[c];
            let diff = M - sum;
            if (diff < 0) continue;
            if (minDiff > diff) {
                minDiff = diff;
                answer = sum;
            }
        }
    }
}
console.log(answer);