let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);

let x = 1 + Math.floor((N+1)/2);
let y = 1 + Math.floor(N/2);

console.log(x*y);

