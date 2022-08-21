let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>BigInt(x));
let start = 0;
let K = 0;
for (i = 0; i < 3; ++i) {
    K = parseInt(input[start].toString(), 10);
    let S = input.slice(start+1, start+K+1).reduce((a,b) => a+b);
    if (S === 0n) console.log('0');
    else if (S > 0n) console.log('+');
    else if (S < 0n) console.log('-');
    start += (K+1);
}