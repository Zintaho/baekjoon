let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
N = N.toString(2).split('').reverse().join('');
console.log(parseInt(N, 2));