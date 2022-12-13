let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let T = +input[0];
let output = '';
for( let t = 1; t <= T; ++t) {
    let row = input[t].toLowerCase();
    let len = row.length;
    let isPalindrome = true;
    for (let i = 0; i < len / 2; ++i) {
        if (row[i] !== row[len - i - 1]) {
            isPalindrome = false;
            break;
        }
    }
    output += `${isPalindrome?'Yes':'No'}\n`;
}
console.log(output);