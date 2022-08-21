let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
console.log(2 << (N-1));