let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
input = input.map((x) => parseInt(x));
let output = input[0] - input[1];
if (output > 0) console.log('>');
else if (output < 0) console.log('<');
else console.log('==');