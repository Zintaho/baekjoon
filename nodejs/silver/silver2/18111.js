let [NMB, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M, B] = NMB.split(' ').map(x=>+x);
let nums = new Array(257).fill(0);
let [min, max] = [257, -1];
for (let n = 0; n < N; ++n) {
    input[n].split(' ').forEach(x => {
        nums[+x]++;
        min = Math.min(+x, min);
        max = Math.max(+x, max);
    });
}

let [sec, top] = [100000000, 0];
for (let k = max; k >= min; --k) {

    let [add, remove] = [0, 0];
    for (let j = min; j <= max; ++j) {
        if (nums[j] > 0) {
            let a = j-k;
            if (a > 0) remove += a*nums[j];
            else if (a < 0) add -= a*nums[j];
        }
    }
    if (add > (B + remove)) continue;
    let newSec = add + remove*2;
    if (sec > newSec) {
        sec = newSec;
        top = k;
    }
}
console.log(sec, top);
