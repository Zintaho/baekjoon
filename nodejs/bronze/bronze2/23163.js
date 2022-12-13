let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let output = '';
for (let i = 1; i <= N; ++i) {
    let temp = input[i].split(' ');
    temp[0] = 'god';
    output += `${temp.join('')}\n`;
}
console.log(output);