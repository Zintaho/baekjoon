let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [X,Y] = input[0].split(' ').map(x=>parseInt(x, 10));
let N = parseInt(input[1], 10);
let min = (X/Y*1000);
for (info of input.slice(2, N+2)) {
    let [x,y] = info.split(' ').map(x=>parseInt(x, 10));
    let k = (x/y*1000);
    min = k < min? k : min;
}
console.log(min.toFixed(2));