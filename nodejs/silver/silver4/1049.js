let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);
let k = Math.floor(N/6);

let [pMin, iMin] = [1001, 1001];
input.forEach((x) => {
    let [P, I] = x.split(' ').map(x=>+x);
    pMin = Math.min(pMin, P);
    iMin = Math.min(iMin, I);
})

let [P, I] = [pMin, iMin];
let min = Math.min(P*k, I*6*k);

N -= k*6;
min += Math.min(P, I*N);
console.log(min);