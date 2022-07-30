let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
input = input[0];
let output = '';

for (c of input) {
    if (97 - c.charCodeAt(0) <= 0) c = c.toUpperCase()
    else c = c.toLowerCase()
    output += c;
}
console.log(output);