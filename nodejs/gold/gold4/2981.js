let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
input.sort((a,b) => a-b);

for (let i = N-1; i >= 0; --i) input[i] -= input[0];
let D = input[N-1];
for (let i = 1; i < N-1; ++i) {
    D = Math.min(D, input[i] - input[i-1]);
}
input = input.slice(1);

let answer = []
for (let d = 2; d <= D; ++d) {
    if (Math.floor(D/d) * d !== D) continue;
    let check = true;
    for (let a of input) {
        if (a%d !== 0) {
            check = false;
            break;
        }
    }
    if (check) {
        answer.push(d);
    }
}
console.log(answer.join(' '));
