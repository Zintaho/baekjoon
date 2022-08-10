let fs = require('fs');
let C = fs.readFileSync('/dev/stdin').toString().trim();
console.log(C.charCodeAt(0) - '가'.charCodeAt(0) + 1);