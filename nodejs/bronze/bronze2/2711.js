let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let output = '';
for (let i = 1; i<=N; ++i) {
    let [k, str] = input[i].split(' ');
    k = parseInt(k, 10) - 1;
    str = str.split('');
    str.splice(k, 1);
    output += `${str.join('')}\n`;
}
console.log(output);