let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [m, d] = input.map(x=>parseInt(x,10));
if (m < 2 || (m==2 && d < 18)) console.log('Before');
else if (m > 2 || (m==2 && d > 18)) console.log('After');
else if (m==2 && d == 18) console.log('Special');