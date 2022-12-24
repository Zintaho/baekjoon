let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let sum = 1;
for (let i = 0; i < input.length - 1; ++i) {
    if (input.charCodeAt(i) >= input.charCodeAt(i+1)) sum++;
}
console.log(sum);