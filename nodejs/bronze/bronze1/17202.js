let [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let nums = new Array(16);
A.split('').forEach((x, i) => {
    nums[2*i] = +x;
});
B.split('').forEach((x, i) => {
    nums[2*i+1] = +x;
});
for (let i = 15; i > 1; --i) {
    for (let j = 0; j < i ; j++) {
        nums[j] = (nums[j] + nums[j+1])%10;
    }
}

console.log(`${nums[0]}${nums[1]}`);