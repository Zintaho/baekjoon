let [R, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
let output = new Array(R).fill('*'.repeat(C));
console.log(output.join('\n'))