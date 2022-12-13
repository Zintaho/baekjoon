let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0], 10);
let output = '';
for (let i = 1; i<= T; ++i) {
    let [a,b] = input[i].split(' ');
    let len = a.length;
    let nums = new Array(len);
    for (let j = 0; j < len; ++j) {
        let k = b.charCodeAt(j) - a.charCodeAt(j);
        k = k < 0? k + 26: k;
        nums[j] = k;
    }
    output += `Distances: ${nums.join(' ')}\n`
}
console.log(output);