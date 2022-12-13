let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(1 << (N.toString(2).length - 1));