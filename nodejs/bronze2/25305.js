let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, k] = input[0].split(' ').map(x=>parseInt(x, 10));
let nums = input[1].split(' ').slice(0, N).map(x=>parseInt(x, 10)).sort((a,b) => b-a);
console.log(nums[k-1]);