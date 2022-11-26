let [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>parseInt(x, 10));
if (a > b) [a,b] = [b,a];

let sum = 0;
if (a*b === 0) {
    let c = a === 0? b:a;
    let e = c >= 0? 1 : -1;
    c = e * c;
    let d = 0;
    if (c%2 === 0) {
        d = (c+1);
        c /= 2;
    } else d = (c+1)/2;
    sum = c*d*e;
} else {
    sum = (b-a)*(b+a+1)/2 + a;
}
console.log(sum);