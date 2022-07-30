let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x => parseInt(x));

let set = new Set();
for (i = 1; i <= 30; ++i) set.add(i);
for (i of input) set.delete(i);
for (i of set) console.log(i);