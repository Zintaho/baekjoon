let [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
let maxGCD = Math.min(a,b);
let gcd = 1;
for (let i = 2; i <= maxGCD; ++i) if (a%i === 0 && b%i === 0) gcd = i;
console.log(a/gcd * b);