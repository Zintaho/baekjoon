let [X, Y, P1, P2] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
/*
    P1 + Xa = y
    P2 + Yb = y

    a = (y - P1)X
    b = (y - P2)Y
*/
let y = Math.max(P1, P2);
if (X===Y && P1 !== P2 && Math.abs(P1-P2) % X !== 0) {
    y = -1;
} else {
while (true) {
    if ((y-P1)%X === 0 && (y-P2)%Y === 0) break;
    if(y++ >= 10000) {y = - 1; break;}
}}
console.log(y);