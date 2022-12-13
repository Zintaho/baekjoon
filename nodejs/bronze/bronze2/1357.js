let Rev = (a) => {
    a = new Array(...(a.toString())).reverse().join('');
    return parseInt(a, 10);
}
let [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let answer = Rev(Rev(a) + Rev(b));
console.log(answer);
