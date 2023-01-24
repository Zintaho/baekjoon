let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [nA, nB] = input[0].split(' ').map(x=>+x);
let A = new Set(input[1].split(' ').map(x=>+x));
let B = new Set(input[2].split(' ').map(x=>+x));
let AUB = new Set(...A,...B);
let AIB = new Set([...A].filter(x=>B.has(x)));
console.log(AUB.size-AIB.size);