let [N, M, input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
N = +N;
M = +M;
input = input.split(' ').map(Number);

let [left, right] = [0, N];

let min = N;
while (left <= right) {
    let mid = Math.floor((left+right) / 2);

    let next = 0;
    let isOK = true;
    for (let pos of input) {
        let [l, r] = [pos - mid, pos + mid];
        if (l > next) {
            isOK = false;
            break;
        }

        next = r;
    }
    if (next < N) isOK = false;

    if (isOK) {
        min = Math.min(min, mid);
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}
console.log(min);