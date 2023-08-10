let [NK,...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = NK.split(' ').map(x=>+x);

input = input.map(x=>+x);
let max = Math.max(...input);

let [start, end] = [0, max+1];
let answer = 0;
while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    let sum = 0;
    for (let k = 0; k < N; ++k) {
        sum += Math.floor(input[k] / mid);
    }

    if (sum >= K) {
        answer = mid;
        start = mid + 1;
    }
    else end = mid - 1;
}
console.log(answer);