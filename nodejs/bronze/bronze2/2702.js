let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);

let output = '';
for (let i = 1; i <= N; ++i) {
    let [a,b] = input[i].split(' ').map(x=>parseInt(x, 10));
    if (a > b) [a,b] = [b,a];
    let [lcm, gcd] = [b, 1];
    for (let j = 2; j <= a; ++j) {
        if (a % j === 0 && b % j === 0) gcd = j;
    }
    lcm = a*b/gcd;
    output += `${lcm} ${gcd}\n`;
}
console.log(output);