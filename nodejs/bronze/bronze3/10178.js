let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let output = '';
for (let i = 1; i<= N; ++i) {
    let [c,v] = input[i].split(' ').map(x=>parseInt(x, 10));
    output += `You get ${Math.floor(c/v)} piece(s) and your dad gets ${c%v} piece(s).\n`;
}
console.log(output);