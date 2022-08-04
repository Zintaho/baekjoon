let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (i = 0; i< input.length; ++i) {
    let counts = input[i].split(' ').map(x=>parseInt(x));
    let score = 0;
    score += 6 * counts[0];
    score += 3 * counts[1];
    score += 2 * (counts[2] + counts[4]);
    score += counts[3];
    output += `${score} `;
}
console.log(output);