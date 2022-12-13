let N = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());
N = 1n + ((N+2n)*(N+1n)/2n - 1n) * 3n - 2n * N; 
console.log((N % 45678n).toString());