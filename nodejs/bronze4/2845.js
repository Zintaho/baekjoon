let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n'); 
let [L, P] = input[0].split(' ').map(x => parseInt(x));
let output = input[1].split(' ').map(x => parseInt(x) - L*P);
console.log(output.join(' '));