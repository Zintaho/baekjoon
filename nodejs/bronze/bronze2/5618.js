let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = parseInt(input[0], 10);
let nums = input[1].split(' ').map(x=>parseInt(x, 10));
let min = Math.min(...nums);
let output = '1\n';
for (let i = 2; i <= min; ++i) {
    let j = 0;
    for (j; j < n; ++j) {
        if (nums[j] % i !== 0) break;
    }
    if (j === n) output += `${i}\n`;
}  
console.log(output);