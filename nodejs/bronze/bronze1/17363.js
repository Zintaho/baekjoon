let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(x=>+x);
input.shift()

let cMap = {
    '.' : '.',
    'O' : 'O',
    '-' : '|',
    '|' : '-',
    '/' : '\\',
    '\\' : '/',
    '^' : '<',
    '<' : 'v',
    'v' : '>',
    '>' : '^',
    '\n' : '\n'
}

let output = '';
for (let m = M-1; m >= 0; --m) {
    for (let n = 0 ; n < N; ++n) {
        output += input[n][m];
    }
    output += '\n';
}
output = output.trim();
let newOutput = '';

for (let i = 0; i < output.length; ++i) {
    newOutput += cMap[output[i]];

}

console.log(newOutput);