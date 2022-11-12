let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let nums = input[1].split(' ').slice(0,N).map(x=>parseInt(x, 10));
let map = {};

[...new Set(nums)].sort((a,b) => a-b).forEach((v,i) => map[v]=i);

nums = nums.map(x=>map[x]).join(' ');
console.log(nums);