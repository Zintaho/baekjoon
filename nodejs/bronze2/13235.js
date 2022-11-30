let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let isPalindrome = true;
let len = input.length;
for (let i = 0; i < len/2; ++i) {
    if (input[i]!==input[len-i-1]) {
        isPalindrome = false;
        break;
    }
}
console.log(isPalindrome);