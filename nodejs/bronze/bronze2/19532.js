let [a,b,c,d,e,f] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>Number(x));
let [x,y] = [0,0];
x = (c*e - f*b) / (e*a - b*d);
y = (c*d - f*a) / (b*d - e*a);

if (x === -0) x = 0;
if (y === -0) y = 0;
console.log(x,y);