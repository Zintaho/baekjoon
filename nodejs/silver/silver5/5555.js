let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [bias, N, ...rings] = input;
N = +N;
let sum = 0;
for (let i = 0; i < N; ++i) {
    let str = rings[i].repeat(2);
    sum += str.indexOf(bias) !== -1? 1:0;
}
console.log(sum);