let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [a,b,c] = input.map(x=>parseInt(x, 10)).sort((a,b) => a-b);
let K1 = (b-a);
let K2 = (c-b);
if (K1 < K2) {
    console.log(b+K1);
} else if (K2 < K1) {
    console.log(a+K2);
} else if (K1 == K2) {
    console.log(c+K1);
}