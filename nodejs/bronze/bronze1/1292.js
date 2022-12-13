let [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
let nums = new Array(b+1).fill(1);
nums[0] = 0;
let k = 2;
for (let i = 2; i <= b; ) {
    let K = k;
    while (K > 0) {
        if (i > b) break;
        nums[i] = nums[i-1] + k;
        i++; K--;
    }
    if (i> b) break;
    k++;
}
console.log(nums[b] - nums[a-1]);