let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
input = parseInt(input);
console.log(Math.ceil(input/5));