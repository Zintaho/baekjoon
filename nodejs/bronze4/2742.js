let fs = require('fs');
let N = parseInt(fs.readFileSync('/dev/stdin').toString().trim());
let output = '';
for (i = N; i >0; --i) output += `${i}\n`;
console.log(output);