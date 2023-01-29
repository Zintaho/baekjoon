let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let dim = new Array(10000).fill(0);
let [min, max] = [10001, 0];
for (let i = 1; i <= +input[0]; ++i) {
    let [x,y] = input[i].split(' ').map(x=>+x);
    [x,y] = [Math.min(x,y), Math.max(x,y)];
    min = Math.min(min, x);
    max = Math.max(max, y);
    for (let j = x; j < y; ++j) dim[j-1] = 1;
}
console.log(dim.slice(min-1,max-1).reduce((a,b)=>a+b));