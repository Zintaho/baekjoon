let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
let a = Math.pow(2, N) + 1;
console.log(a*a);