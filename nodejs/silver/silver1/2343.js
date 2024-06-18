let [NM, input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
input = input.split(' ').map(Number);

let left = Math.max(...input);
let right = N * left;

let min = right;
while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let discLeft = M;

    let current = 0;
    for (let n = 0; n < N; ++n) {
        let lec = input[n];
        let next = current + lec;
        if (next > mid) {
            current = lec;
            discLeft--;
            if ((n+1) === N) discLeft--;
        } else {
            current = next;
            if ((n+1) === N) discLeft--;
        }
        if ((N - n) <= discLeft) {
            discLeft --;
            current = 0;
        }
    }
    if (discLeft < 0) left = mid + 1;
    else if (discLeft === 0) {
        min = Math.min(min, mid);
        right = mid - 1;
    }
}

console.log(min);