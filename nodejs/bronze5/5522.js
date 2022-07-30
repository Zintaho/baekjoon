let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x => parseInt(x)).reduce((a,b) => a+b);
console.log(input);