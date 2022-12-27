let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(x=>+x);
console.log(Math.max(...input) * Math.min(...input));