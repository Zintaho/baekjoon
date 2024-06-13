let [NM, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
input = input.map(Number);

let [left, right] = [1, Math.max(...input)];
let min = 1000000000;
while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let cnt = 0;
    for (let m = 0; m < M; ++m) {
        cnt += Math.ceil(input[m] / mid);
    }

    if (cnt <= N) {
        right = mid - 1;
        min = Math.min(min, mid);
    } else {
        left = mid + 1;
    }
}
console.log(min);