let [C, K, P] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>parseInt(x, 10));
let sum = 0;
for (let i = 1; i<= C; ++i) {
    sum += K*i + P * i * i;
}
console.log(sum);