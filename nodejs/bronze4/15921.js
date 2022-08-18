let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(input[0] == '0'? 'divide by zero' : '1.00');