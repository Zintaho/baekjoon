let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);
let output = '';
for(i = N; i > 0; --i) {
    for(j = i; j > 0; --j) output += '*';
    output +='\n';
}
console.log(output);