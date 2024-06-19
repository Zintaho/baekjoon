let [N, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);

let [left, right] = [0, Math.max(...input)];
let max = 0;
let count = 100;
while (right - left > 1e-9 && count-- >= 0) {
    const mid = (left + right) / 2;
    
    let sum = 1;
    for (let i = 0; i < 3; i++) {
        sum *= Math.floor(input[i] / mid);
    }
    
    if (sum >= N) {
        left = mid;
        max = Math.max(mid, max);
    } else {
        right = mid;
    }
}

console.log(max.toPrecision(10));
