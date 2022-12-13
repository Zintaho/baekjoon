let A = 'A'.charCodeAt(0);
let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let output = new Array(...input).map(x=>String.fromCharCode(A+((x.charCodeAt(0) - A - 3 + 26)%26))).join('')
console.log(output);