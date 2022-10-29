let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>parseInt(x, 10));
let M = Math.ceil(Math.sqrt(input[0]));
let N = Math.floor(Math.sqrt(input[1]));
let answer = [];
for (let i = M; i <= N; ++i) {
    answer.push(i*i);
}
if (answer.length === 0) console.log(-1);
else console.log(`${answer.reduce((a,b) => a+b)}\n${answer[0]}`);
