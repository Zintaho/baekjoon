let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let nums = input[1].split(' ').map(x=>parseInt(x, 10));
let cnt = 0;
for (let i = 0; i< N; ++i) {
    if (i+1 !== nums[i]) cnt+=1;
}
console.log(cnt);