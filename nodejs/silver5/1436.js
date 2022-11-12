let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
let k = 1;
let n = 666;
while (k < N) if ((++n).toString().includes('666')) ++k;
console.log(n);