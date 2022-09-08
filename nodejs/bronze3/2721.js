let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0], 10);
let nums = input.slice(1, T+1).map(x=>parseInt(x, 10));
let max = Math.max(...nums);
let memo = new Array(max).fill(3);
for (i = 1 ; i < max; ++i) {
    memo[i] = memo[i-1] + (i+1)*(i+2)*(i+3)/2;
}

let output = '';
for (i = 0; i < T; ++i) {
    let n = nums[i];
    output += `${memo[n-1]}\n`;
}
console.log(output);