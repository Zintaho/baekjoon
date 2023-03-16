let [s,t] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [sLen, tLen] = [s.length, t.length];
const euclidian = (a,b) => {
    while (b!= 0) {
        [a,b] = [b, a%b]
    }
    return a;
}
let gcd = euclidian(sLen, tLen);
let lcm = sLen * tLen / gcd;

s = s.repeat(lcm / sLen);
t = t.repeat(lcm / tLen);

let answer = s===t;

console.log(answer?'1':'0');