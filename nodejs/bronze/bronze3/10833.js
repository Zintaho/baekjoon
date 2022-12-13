let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let sum = 0;
for (let i = 1; i<=N; ++i) {
    let [s, a] = input[i].split(' ').map(x=>parseInt(x, 10));
    sum += a%s;
}
console.log(sum);