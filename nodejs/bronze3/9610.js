let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = parseInt(input[0], 10);
let [q1, q2, q3, q4, ax] = [0,0,0,0,0];
for (let i = 1; i<= n; ++i) {
    let [x,y] = input[i].split(' ').map(x=>parseInt(x, 10));
    if (x > 0 && y > 0) q1++;
    else if (x < 0 && y > 0) q2++;
    else if (x < 0 && y < 0) q3++;
    else if (x > 0 && y < 0) q4++;
    else ax++;
}
console.log(`Q1: ${q1}
Q2: ${q2}
Q3: ${q3}
Q4: ${q4}
AXIS: ${ax}`);