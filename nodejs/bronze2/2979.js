let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let prices = input[0].split(' ').map(x=>+x);
prices[1] = 2*prices[1];
prices[2] = 3*prices[2];
let nums = new Array(100).fill(0);
let [min, max] = [101, 0];
for (let i = 1; i <= 3; ++i){
    let [a,b] = input[i].split(' ').map(x=>+x);
    a = a-1;
    b = b-1;
    for (let j = a; j < b; ++j) nums[j]++;
    if (a < min) min = a;
    if (b > max) max = b;
}
let sum = 0;
nums.slice(min,max).forEach(x => sum += prices[x-1]||0);
console.log(sum);