let [NK, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [N, K] = NK.split(' ').map(Number);

let min = 1_000_000_000;
let max = 0;
input.forEach((x,i) => {
    x = Number(x);
    input[i] = x;
    max = Math.max(x, max);
    min = Math.min(x, min);
});

let [left , right] = [min, max+K];
let answer = 0;
while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let sum = 0;
    input.forEach((x) => {
        if (mid >= x) sum += (mid - x);
    });
    if (sum > K) {
        right = mid - 1;
    } else {
        answer = Math.max(answer, mid);
        left = mid + 1;
    } 
}
console.log(answer);