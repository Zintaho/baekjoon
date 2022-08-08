let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let sums = new Array(2);
for (i = 0; i < 2; ++i) {
    sums[i] = input[i].split(' ').map(x=>parseInt(x,10)).reduce((a,b)=>a+b);
}
console.log(sums[0] > sums[1]?sums[0]:sums[1]);