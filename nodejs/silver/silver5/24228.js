let [N, R] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(BigInt);

console.log(((N - 1n) + (2n *R)).toString())

