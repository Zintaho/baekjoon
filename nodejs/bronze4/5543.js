let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>parseInt(x));
let bgs = input.slice(0,3);
let bvs = input.slice(3);
console.log(Math.min(...bgs) + Math.min(...bvs) - 50);