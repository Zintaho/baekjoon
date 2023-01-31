let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let nums = new Array(9).fill(0);
for (let c of input) {
    c = +c;
    c = c===9?6:c;
    nums[c] += c!==6?1:0.5;
}
console.log(Math.ceil(Math.max(...nums)));