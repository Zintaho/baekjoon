let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let people = input[0].split(' ').map(x=>parseInt(x, 10));
let [X, Y, R] = input[1].split(' ').map(x=>parseInt(x, 10));
console.log(people.indexOf(X)+1);