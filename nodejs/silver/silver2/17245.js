let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;

let sums = new Array(10000001).fill(0);
let max = 0;
input.forEach(x => {
    x.split(' ').forEach(y=>{
        sums[+y]++;
        max = Math.max(max, +y);
    });
});
sums = sums.slice(0, max+1);
let SUM = sums.reduce((a,b) => a+b);
let newSums = new Array(max+1);
newSums[0] = 0;
let cnt = SUM - sums[0];
for (let i = 1; i <= max; ++i) {
    newSums[i] = (cnt+newSums[i-1]);
    cnt -= sums[i];
}
let HALF = Math.ceil(newSums[max] * 0.5);
let [left, right] = [0, max];

let ans = max;
while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    let h = newSums[mid];
    if (h >= HALF) {
        ans = Math.min(mid, ans);
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}
console.log(ans);