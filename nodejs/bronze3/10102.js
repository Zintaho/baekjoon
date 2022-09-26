let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let A = 0;
let B = 0;
for (let i = 0 ; i< N; ++i) {
    let c = input[1][i]
    if (c === 'A') A += 1;
    if (c === 'B') B += 1;
}
if (A > B) console.log('A');
else if (A===B) console.log('Tie');
else if (A < B) console.log('B');
