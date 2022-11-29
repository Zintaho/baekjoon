let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = +input[0];
let output = '';
for (let i = 1; i <= T; ++i) {
    const nums = input[i].split(' ').map(x=>parseInt(x, 10)).sort((a,b) => b-a);
    output += `${nums[2]}\n`;
}
console.log(output);