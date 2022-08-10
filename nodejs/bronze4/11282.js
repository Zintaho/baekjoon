let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input, 10);
console.log(String.fromCharCode('가'.charCodeAt(0) + (N-1)));