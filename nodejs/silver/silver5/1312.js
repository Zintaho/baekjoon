let [A,B,N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [a,b,n] = [+A, +B, +N];
let k = 0;
if (a >= b) k = parseInt(a/b).toString().length;
else k = B.length - A.length + 1;

A += '0'.repeat(n);
A = BigInt(A); B = BigInt(B);
C = A/B;

C = C.toString();
if (a < b) C = '0'.repeat(k) + C;
C = C.split('');
if (a >=b) C.splice(k, 0, '.');
else C.splice(1, 0, '.');
C = C.join('');

if (a>=b) console.log(C.charAt(k+n));
else console.log(C.charAt(1+n));