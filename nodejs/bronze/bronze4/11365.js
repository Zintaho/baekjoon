let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (s of input.slice(0, input.length-1)) {
    let temp = '';
    for (i = s.length - 1; i >=0 ; --i) {
        temp += s.charAt(i);
    }
    output += `${temp}\n`;
}
console.log(output);