let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let output = '';
for (row of input) {
    if (row === '0') break;
    let N = row.length;
    let isPalindrome = true;
    for (let i = 0; i < N/2; ++i) {
        if (row[i] !== row[N-i-1]) {
            isPalindrome = false;
            break;
        }
    }
    output += isPalindrome? 'yes\n' : 'no\n';
}

console.log(output);