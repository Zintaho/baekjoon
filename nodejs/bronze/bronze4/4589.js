let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let output = 'Gnomes:\n';
for (i=1; i<=N; ++i) {
    let nums = input[i].split(' ').map(x=>parseInt(x));
    let isOrdered = (nums[0]>nums[1])==(nums[1]>nums[2]);
    output += isOrdered?'Ordered\n':'Unordered\n';
}
console.log(output);