let [Y, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[Y, M] = [+Y, +M];
console.log(2*M - Y);