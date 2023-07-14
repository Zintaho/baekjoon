let [N, MK, A]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
let [M, K] = MK.split(' ').map(x=>+x);
A = A.split(' ').map(x=>+x);
A.sort((a,b) => b-a);

let sum = M*K;
let cnt = 0;
for (let a of A) {
    sum -= a;
    cnt++;
    if (sum <= 0) break;
}
console.log(sum <= 0?cnt:"STRESS");