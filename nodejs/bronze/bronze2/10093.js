let [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>BigInt(x));
if (A > B) [A,B] = [B,A];
let k = (B-A)-1n;
k = k < 0n? 0: parseInt(k.toString(), 10);
const nums = new Array(k);

for (let n = (A+1n); n < B; ++n) {
    const i = parseInt((n - (A+1n)).toString(), 10);
    nums[i] = n ;
}

console.log(k);
console.log(nums.join(' '));

