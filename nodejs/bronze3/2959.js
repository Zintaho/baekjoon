let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let nums = input.map(x=>parseInt(x, 10)).sort((a,b) => b-a);
console.log(nums[1] * nums[3]);