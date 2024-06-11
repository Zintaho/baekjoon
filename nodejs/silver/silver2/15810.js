let [NM, input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
input = input.split(' ').map(Number);
let min = Math.min(...input);

let [left, right] = [min, min*M];
let answer = right;
while (left <= right) {
    let mid = Math.floor((left+right) / 2);

    let sum = 0;
    input.forEach((x) => {
        sum += Math.floor(mid / x);
    })
    if (sum >= M) {
        right = mid - 1;
        answer = Math.min(answer, mid);
    } else left = mid + 1;
}
console.log(answer);
