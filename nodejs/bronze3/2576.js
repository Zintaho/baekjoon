let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=> parseInt(x)).filter(x=>x%2!=0);
if (input.length === 0) console.log(-1);
else {
    console.log(input.reduce((a,b) => a+b));
    console.log(Math.min(...input));
}