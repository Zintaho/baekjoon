let input= require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
input.sort((a,b) => a-b);
console.log(input[1]);