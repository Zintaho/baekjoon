let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n\n');
let N = parseInt(input[0], 10);
let output = '';
for (i = 1; i<= N; ++i) {
    let candies = input[i].split('\n').map(x=>BigInt(x));
    let n = parseInt(candies[0], 10);
    candies = candies.slice(1, n+1);
    let sum = candies.reduce((a,b) => a+b);
    output += sum % BigInt(candies.length) === 0n ? 'YES\n' : 'NO\n';
}
console.log(output);
