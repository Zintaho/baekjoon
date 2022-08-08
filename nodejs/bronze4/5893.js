let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let len = input.length;
let k = BigInt(1);
let N = BigInt(0);
for (i = len - 1; i >= 0 ; --i) {
    if(parseInt(input[i])) N += k;
    k *= BigInt(2);
}
N *= BigInt(17);
console.log(N.toString(2));