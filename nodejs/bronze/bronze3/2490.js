let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = ['D', 'C', 'B', 'A', 'E'];
for (row of input) {
    let N = row.split(' ').map(x=>parseInt(x, 10)).reduce((a,b) => a+b);
    console.log(answer[N]);
}