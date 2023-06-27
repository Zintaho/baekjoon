let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
input.sort((a,b)=>b-a);
let [a,b,c] = input;
if (a >= b+c) {
    a -= (a-b-c+1);
}
console.log(a+b+c);