let [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
[A,B] = [+A, +B];

let cnt = 0;
while (B > A) {
    if (B%10 === 1) {
        B = (B-1)/10;
        cnt++;
    } else if (B%2 === 0) {
        B /= 2;
        cnt++;
    } else {
        cnt = -1;
        break;
    }
}
if (B !== A) cnt = -1;
else cnt++;
console.log(cnt);
