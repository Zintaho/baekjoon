let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.split(' ').map(x=>+x);
input.sort((a,b) => b-a);
let score = 0;
let k = 0;
for (let i = 0; i < +N; ++i) {
    let [a,b] = [k, input[i]];
    k += b;
    score += (a*b);
}
console.log(score);