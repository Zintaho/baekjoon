let [NM, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
input = input.map(Number);
input.sort((a,b) => a-b);

let price = 0;
let max = 0;
let K = M;
for (let m = 0; m < M; ++m) {
    let k = K;
    if (K > N) k = N;

    max = Math.max(max, input[m] * k);
    if (max === input[m] * k) price = input[m];

    K--;
}

console.log(price, max);