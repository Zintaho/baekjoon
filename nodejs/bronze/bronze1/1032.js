let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let result = input[1].split('');
for (let i = 2; i <= N; ++i) {
    for (let j = 0; j < input[i].length; ++j) {
        if (input[i][j] !== result[j]) result[j] = '?';
    }
}

console.log(result.join(''));