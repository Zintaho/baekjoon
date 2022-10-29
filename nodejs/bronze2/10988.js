let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = 1;
let N = input.length;
for (let i = 0; i < Math.floor(N/2); ++i) {
    if (input[i] !== input[N-i-1]) {
        answer = 0;
        break;
    }
}
console.log(answer);