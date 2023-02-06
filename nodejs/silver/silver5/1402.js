let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = +input[0];
console.log("yes\n".repeat(T).trimEnd());