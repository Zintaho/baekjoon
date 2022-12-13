let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let [S,T,D]= input.map(x=>parseInt(x, 10));
console.log(D/(S*2)*T);