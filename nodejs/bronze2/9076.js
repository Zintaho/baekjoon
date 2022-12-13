let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
let T = +input[0];
for (let t = 1; t <= T; ++t) {
    let nums = input[t].split(' ').map(x=>+x);
    nums = nums.sort((a,b)=>b-a);
    output += `${nums[1]-nums[3] >= 4?'KIN':nums[1]+nums[2]+nums[3]}\n`;
}
console.log(output);