let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(N*(N-1));