let nums = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
let output = '';
while (true) {
    for (let i = 0; i < 4; ++i) {
        if (nums[i] > nums[i+1]) {
            [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
            output += `${nums.join(' ')}\n`;
        }
    }
    if (nums.join('') === '12345') break;
}
console.log(output);