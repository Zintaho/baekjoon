let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0], 10);
let output = '';
for (let i = 1; i <= T; ++i) {
    let [N, K] = input[2*i - 1].split(' ').map(x=>parseInt(x, 10));
    let nums = input[2*i].split(' ').map(x=>Math.floor(parseInt(x, 10)/K));
    output += `${nums.reduce((a,b) => a+b)}\n`;
}
console.log(output);