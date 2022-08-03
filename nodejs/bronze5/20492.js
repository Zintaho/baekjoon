let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);
console.log(`${input*0.78} ${input*0.8+input*0.2*0.78}`);