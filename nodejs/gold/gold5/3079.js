let [NM, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [N, M] = NM.split(' ').map(BigInt);
input = input.map(BigInt);
let min = Infinity;
input.forEach((x, i) => {
    input[i] = BigInt(x);
    if (min > input[i]) min = input[i];

} );

let [left, right] = [min, min*M];
let answer = right;
while (left <= right) {
    let mid = (left+right) / 2n;

    let sum = 0n;
    input.forEach((x) => {
        sum += mid / x;
    })
    if (sum >= M) {
        right = mid - 1n;
        if (answer >= mid) answer = mid;
    } else left = mid + 1n;
}
console.log(answer.toString());
