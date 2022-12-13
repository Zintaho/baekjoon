let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let T = parseInt(input[0], 10);
let output = '';
for (let i = 1; i <= T; ++i) {
    let [a, b] = [input[i], input[i].split('').reverse().join('')].map(x =>parseInt(x, 10));
    let str = (a+b).toString();
    let isPalindrome = true;
    for (let j = 0; j < Math.floor(str.length / 2); ++j) {
        if (str[j] !== str[str.length - (j+1)]) {
            isPalindrome = false;
            break;
        }
    }
    output += `${isPalindrome?'YES':'NO'}\n`
}
console.log(output);

