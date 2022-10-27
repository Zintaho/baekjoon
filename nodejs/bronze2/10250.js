let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0], 10);
let output = '';
for (let i = 1; i<=T; ++i) {
    let [H, W, N] = input[i].split(' ').map(x=>parseInt(x, 10));
    let x = Math.ceil(N/H);

    let Y = H !=1? H:1;
    let y = N % Y;
    if (y === 0) y = Y;
    output += `${y}${x<10?'0':''}${x}\n`;
}
console.log(output);