let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let L = +input[0];
let N = +input[1];
input = input.slice(2);
let cake = new Array(L).fill(0);
let guest = new Array(N).fill(0);
let count = new Array(N).fill(0);

for (let n = N-1; n >= 0; --n) {
    let [A,B] = input[n].split(' ').map(x=>+x);
    guest[n] = (B-A+1);
    for (let a = A; a <= B; ++a) {
        cake[a-1] = (n+1);
    }
}
for (let l = 0; l < L; ++l) {
    if (cake[l] > 0) count[cake[l]-1]++;
}

let [gMax, gIdx] = [0,0];
let [cMax, cIdx] = [0,0];
for (let n = 0; n < N; ++n) {
    let [g,c] = [guest[n], count[n]];
    if (g > gMax) {gMax=g; gIdx = n+1;}
    if (c > cMax) {cMax=c; cIdx = n+1;}
}

console.log(`${gIdx}\n${cIdx}`);