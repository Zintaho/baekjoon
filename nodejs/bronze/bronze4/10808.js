let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let chars = new Array(26).fill(0);
for (i = 0 ; i< input.length; ++i) chars[input.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
console.log(chars.join(' '));