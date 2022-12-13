let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (i = 1; i < input.length; ++i) {
    let temp = '';
    for(j = input[i].length - 1; j >= 0; --j) {
        temp += input[i].charAt(j);
    }
    output += `${temp}\n`;
}
console.log(output);