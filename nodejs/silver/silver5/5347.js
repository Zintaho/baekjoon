let [N,...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = [];
const euclidean = (a,b) => {
    while (b!=0) {
        [a,b] = [b, a%b];
    }
    return a;
}
for (let i = 0; i < N ; ++i) {
    let [a,b] = input[i].split(' ').map(x=>+x);
    let gcd = euclidean(a,b);
    let lcm = a/gcd * b;
    output.push(lcm);
}
console.log(output.join('\n'));