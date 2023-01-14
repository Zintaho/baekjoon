let [N,P] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>BigInt(x));
let [set1, set2] = [new Set(), new Set()];

let n = N;
while (true) {
    n = n*N%P;
    if (set2.has(n)) break;
    if (set1.has(n)) set2.add(n);
    else set1.add(n);
}
console.log(set2.size);