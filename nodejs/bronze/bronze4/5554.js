let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let sec = input.map(x=>parseInt(x,10)).reduce((a,b) => a+b);
console.log(`${Math.floor(sec/60)}\n${sec%60}`);