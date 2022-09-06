let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let sum = 0;
let n = 0;
let nums = input[1].split(' ').map(x=>parseInt(x, 10));
for (i =0 ; i < N; ++i) {
    let k = nums[i]
    if (k === 0) {
        sum += n*(n+1)/2;
        n = 0;
    } else {
        n += k;
    }
}
sum += n*(n+1)/2;
console.log(sum);