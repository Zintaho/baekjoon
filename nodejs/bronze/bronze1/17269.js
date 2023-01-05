let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [a,b] = input[0].split(' ').map(x=>+x);
let [A,B] = input[1].split(' ');

let nums = new Array(a+b);
let charlist = [3,2,1,2,4,3,1,3,1,1,3,1,3,2,1,2,2,2,1,2,1,1,1,2,2,1];
let ccA = 'A'.charCodeAt(0);

A.split('').forEach((x, i) => {
    let k = charlist[x.charCodeAt(0) - ccA];
    let j = 0;
    if (a > b && i >= b) j = b + i;
    else j = 2* i;

    nums[j] = k;
});
B.split('').forEach((x, i) => {
    let k = charlist[x.charCodeAt(0) - ccA];
    let j = 0;
    if (a < b && i >= a) j = a+ i;
    else j = 2* i + 1;

    nums[j] = k;
});

for (let i = a+b - 1; i > 1; --i) {
    for (let j = 0; j < i ; j++) {
        nums[j] = (nums[j] + nums[j+1])%10;
    }
}

console.log(parseInt(`${nums[0]}${nums[1]}`)+'%');