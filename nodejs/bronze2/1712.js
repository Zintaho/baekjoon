let [A,B,C] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>parseInt(x, 10));
if (B >= C) console.log(-1);
else {
    console.log(Math.floor(A/(C-B))+1);
}
