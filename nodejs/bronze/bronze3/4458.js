let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let output = ''
for( i= 1; i<=N; ++i) {
    let str = input[i];
    str = `${str[0].toUpperCase()}${str.slice(1)}`;
    output += `${str}\n`;
}
console.log(output);