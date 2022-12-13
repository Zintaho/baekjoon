let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0], 10);
let output = '';
for (let i = 1; i <= T; ++i) {
    let [Y, K] = [0, 0];
    for (let j = 0; j < 9; ++j) {
        let [y, k] = input[1 + i * j].split(' ').map(x=>parseInt(x, 10));
        [Y, K] = [Y + y, K + k];
    }
    let result = '';
    if (Y > K) result = 'Yonsei';
    else if (K > Y) result = 'Korea';
    else if (Y === K) result = 'Draw';
    output += `${result}\n`;
}
console.log(output);