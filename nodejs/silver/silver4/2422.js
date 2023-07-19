let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);

let sum = N*(N-1)*(N-2)/6;
let set = new Set();
for (let m = 0; m < M; ++m) {
    let [a,b] = input[m].split(' ').map(x=>+x);
    [a,b] = [Math.min(a,b), Math.max(a,b)];
    for (let i = 1; i <= N; ++i) {
        if (i === a || i === b) continue;
        if (i < a) set.add(`${i} ${a} ${b}`);
        if (a < i && i < b) set.add(`${a} ${i} ${b}`);
        if (a < i && b < i) set.add(`${a} ${b} ${i}`);
    }
}
console.log(sum - set.size);