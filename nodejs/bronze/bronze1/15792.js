let [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
let output = '';

let cnt = 0;
while (a > 0) {
    if (cnt === 1) output += '.';

    let q = Math.floor(a/b);
    output += `${q}`;

    a -= q*b;
    a*=10;
    
    if (cnt++ > 2000) break;
}
console.log(output);