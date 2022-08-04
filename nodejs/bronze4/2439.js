let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input);
let output = '';
for (i = 0; i< N; ++i) {
    for ( j = 0 ; j < N; ++j) {
        if (j < N - (i+1)) output += ' ';
        else output += '*';
    }
    output += '\n';
}
console.log(output);