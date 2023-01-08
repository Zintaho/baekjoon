let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let name = input[0];
let N = +input[1];

let love = "LOVE";
let A = 'A'.charCodeAt(0);
let LOVE = new Array(4);
love.split('').forEach((c,i) => LOVE[i] = c.charCodeAt(0) - A);

input = input.slice(2);

let defaultNums = new Array(26).fill(0n);
for (let i = 0; i < name.length; ++i) {
    defaultNums[name.charCodeAt(i) - A] += 1n;
}

let [max, maxName] = [0n,'[']
for (let i = 0; i < N; ++i) {
    let nums = [...defaultNums];
    let teamName = input[i];
    for (let j = 0 ; j < teamName.length; ++j) {
        nums[teamName.charCodeAt(j) - A] += 1n;
    }

    let sum = 1n;
    for (let a = 0; a < 3; ++a) {
        for (let b= a+1; b < 4; ++b) {
            sum *= (nums[LOVE[a]] + nums[LOVE[b]]);
        }
    }
    sum %= 100n;
    if (max < sum) {
        max = sum;
        maxName = teamName;
    } else if (max == sum) {
        if (maxName > teamName) {
            maxName = teamName;
        }
    }
}
console.log(maxName);