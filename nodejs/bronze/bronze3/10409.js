let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [n, T] = input[0].split(' ').map(x=>parseInt(x, 10));
let t = input[1].split(' ').map(x=>parseInt(x, 10));
let i = 0;
let sum = 0;
let ended = false;
for (i ; i< n; ++i) {
    if (sum > T) {
        console.log(i);
        ended = true;
        break;
    }
    sum += t[i];
    if (sum > T) {
        console.log(i);
        ended = true;
        break;
    }
}
if (!ended) console.log(i);