let [NK, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [_, K] = NK.split(' ').map(Number);
input = input.split(' ').map(Number);
input.sort((a,b) => b-a);
input = input.slice(0, K);
input = input.reduce((a,b) => a+b);
console.log(input - (K-1)*K / 2);