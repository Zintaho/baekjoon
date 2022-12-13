let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let output = '';
for (let i = 1; i<=N; ++i) {
    let [a,b] = input[i].split(' ').map(x=>parseInt(x, 10));
    output += `Case ${i}: ${a+b}\n`
}
console.log(output);