let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [A,B,C,D] = input[0].split(' ').map(x=>parseInt(x, 10));
let [P, M, N] = input[1].split(' ').map(x=>parseInt(x, 10));
let max = Math.max(P, M, N);
let table = new Array(max+1).fill(0);
for (let a = 0; a <= max; a += (A+B)) {
    let k = (a+A) <= (max+1)? (a+A) : (max+1);
    for (let i = a; i < k; ++i) {
        table[i] += 1;
    }
}
for (let c = 0; c <= max; c += (C+D)) {
    let k = (c+C) <= (max+1)? (c+C) : (max+1);
    for (let i = c; i < k; ++i) {
        table[i] += 1;
    }
}
console.log(`${table[P-1]}\n${table[M-1]}\n${table[N-1]}`);