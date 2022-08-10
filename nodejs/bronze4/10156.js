let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let [K, N, M] = input.map(x=>parseInt(x,10));
let output = K*N - M
console.log(output > 0? output : 0);