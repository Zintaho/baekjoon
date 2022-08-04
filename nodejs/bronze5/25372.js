let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let output = '';
for (i = 1; i< N+1; ++i) {
    let answer = 'no\n';
    let len = input[i].length
    if (6<=len && len <= 9) answer = 'yes\n';
    
    output += answer;
}
console.log(output);