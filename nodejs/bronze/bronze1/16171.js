let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let regex = new RegExp(/\d/g);
input[0] = input[0].replace(regex, '');
console.log(input[0].includes(input[1])?1:0)