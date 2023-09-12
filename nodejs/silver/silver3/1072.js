let [X, Y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);

let a = Math.floor(Y*100/X);
/*
    x >= ((a+1)X - 100Y) / (99 - a)
*/
let b = a === 99? -1 : Math.ceil(((a+1)*X - 100*Y) / (99 - a));
console.log(b <= 0? -1: b);