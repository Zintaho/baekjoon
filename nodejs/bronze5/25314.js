let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input)/4;
let output = '';
for (i = 0 ; i < N; ++i) output += 'long ';
console.log(`${output}int`);