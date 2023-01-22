let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(x=>+x);
let arr = input[1].split(' ');
arr = arr.concat(input[2].split(' '));
arr = arr.map(x=>+x)
arr.sort((a,b) => a-b);
console.log(arr.join(' '));
