let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let output = '';
for (let i = 1; i <= N; ++i) {
    let j = parseInt(input[i], 10);
    let box = '';
    for (let y = 0; y < j; ++y) {
        let line = '';
        for (let x = 0; x < j; ++x) {
            if (y === 0 || y === (j-1) || x === 0 || x === (j-1)) {
                line += '#';    
            } else {
                line += 'J';
            }
        }
        box += `${line}\n`;
    }
    output += `${box}`;
    if (i !== N) output += '\n';
}
console.log(output);