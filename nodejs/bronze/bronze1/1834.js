let n = BigInt(require('fs').readFileSync('/dev/stdin').toString());
console.log(((n+1n)*n*(n-1n)/2n).toString());