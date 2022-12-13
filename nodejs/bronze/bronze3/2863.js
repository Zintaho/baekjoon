let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [A,B] = input[0].split(' ').map(x=>parseInt(x, 10));
let [C,D] = input[1].split(' ').map(x=>parseInt(x, 10));
let streak = [A/C + B/D, C/D + A/B, D/B + C/A, B/A + D/C];
let max = streak[0];
let answer = 0;
for (i=1; i < 4; ++i) {
    if (streak[i] > max) {
        max = streak[i];
        answer = i;
    }
} 
console.log(answer);