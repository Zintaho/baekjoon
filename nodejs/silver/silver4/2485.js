let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);

let gcd = new Array(N-2);
for (let i = 0; i < N-2; ++i) {
    let [i0, i1, i2] = [input[i], input[i+1], input[i+2]];
    let [a, b] = [i1-i0, i2-i1];
    gcd[i] = euclidean(a,b);
}
gcd = Math.min(...gcd);
console.log((input[N-1] - input[0] ) / gcd - N + 1);


function euclidean(a, b) {
    [a, b] = [Math.max(a,b), Math.min(a,b)];
    while (true) {
        let r = a%b;
        if (r === 0) return b;
        [a,b] = [b,r];
    }
}