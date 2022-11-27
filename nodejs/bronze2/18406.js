let input = require('fs').readFileSync('/dev/stdin').toString().split('');
let [A, B] = [0, 0];
input.slice(0, input.length/2).forEach(x => A += +x);
input.slice(input.length/2).forEach(x => B += +x);

let output = A === B? "LUCKY" : "READY";
console.log(output);