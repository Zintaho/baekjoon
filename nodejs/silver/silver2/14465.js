let [NKB, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K, B] = NKB.split(' ').map(x=>+x);
let lights = new Array(N).fill(0);
input.forEach(x=> lights[+x - 1] = 1);

let sum = lights.slice(0, K).reduce((a,b) => a+b);
let min = sum;
for (let i = 1; i <= N-K; ++i) {
    if (min === 0) break;
    sum -= lights[i-1];
    sum += lights[i+K - 1];
    min = Math.min(sum, min);
}
console.log(min);