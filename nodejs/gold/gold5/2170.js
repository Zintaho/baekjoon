let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.map(x=>x.trim().split(' ').map(Number));
input.sort((a, b) => a[0] - b[0]);

let [start, end] = [input[0][0], input[0][1]];
let [current, sum] = [end - start, 0];
for (let n = 1; n < N; ++n) {
    let [a, b] = input[n];
    if (start <= a && a <= end) {
        end = Math.max(end, b);
        current = end - start;
    } else {
        sum += current;
        [start, end] = [a, b];
        current = end - start;
    }
}

sum += current;
console.log(sum);