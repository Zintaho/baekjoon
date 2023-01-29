let [N, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let cnt = 0;
nums = nums.split(' ').map(x=>+x);
let k = 1;
for (let a of nums) {
    if (k!== a) cnt++;
    else k++;
}
console.log(cnt);