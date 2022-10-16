let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0], 10);
let output = '';
for (let i = 1; i <= T; ++i) {
    let [N, M] = input[i].split(' ').map(x=>parseInt(x, 10))
    // U + T = M
    // U + 2 * T = N
    let T = N - M;
    let U = 2*M - N;
    output += `${U} ${T}\n`;
}
console.log(output);