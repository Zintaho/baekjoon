let [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>x.split(' ').map(x=>+x));
let gcd = euclid(A[1], B[1]);
let lcm = gcd * A[1] * B[1];
A[0] *= (lcm / A[1]);
B[0] *= (lcm / B[1]);
A[1] = lcm;
B[1] = lcm;
[A, B] = [A[0] + B[0] , A[1]];
gcd = euclid(A,B);
A/=gcd;
B/=gcd;
console.log(A,B);

function euclid(a, b) {
    [a,b] = [Math.max(a,b), Math.min(a,b)];
    while(b!=0) {
        [a,b] = [b, a%b];
    }
    return a;
}