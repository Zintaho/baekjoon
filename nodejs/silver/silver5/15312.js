let [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let len = A.length;
let nums = [3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1];

let a = 'A'.charCodeAt(0);
let love = new Array(len*2);

A = A.split('').forEach((x, i) => {
    love[i*2] = nums[x.charCodeAt(0) - a];
});
B = B.split('').forEach((x, i) => {
    love[i*2 + 1] = nums[x.charCodeAt(0) - a];
});

for (let i = love.length - 1; i != 1; --i) {
    for (let j = 0; j < i; ++j) {
        love[j] = love[j] + love[j+1];
        love[j]%=10;
    }
}

let result = (love[0]%10).toString() + (love[1]%10).toString();

console.log(result);
