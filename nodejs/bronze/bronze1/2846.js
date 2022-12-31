let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let nums = input[1].split(' ').map(x=>+x);

let max = 0;
let [start, end] = [nums[0], nums[0]];
for (let i = 1; i < N; ++i) {
    let a = nums[i];

    if (a > end) end = a;
    else {
        let len = end - start;
        if (len > max) max = len;
        [start ,end] = [a,a];
    }

}
let len = end - start;
if (len > max) max = len;

console.log(max);