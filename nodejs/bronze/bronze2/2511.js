let [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
A = A.split(' ').map(x=>+x);
B = B.split(' ').map(x=>+x);
let [a,b] = [0,0];
let lastWinner = 'D';
for (let i = 0; i < 10; ++i) {
    let result = A[i]-B[i];
    if (result  > 0) {
        a+= 3;
        lastWinner = 'A';
    }
    else if (result < 0) {
        b += 3;
        lastWinner = 'B';
    }
    else {a++; b++;}
}
let output = `${a} ${b}\n`;
if (a > b) output += 'A';
else if (a < b) output += 'B';
else output += lastWinner;
console.log(output);