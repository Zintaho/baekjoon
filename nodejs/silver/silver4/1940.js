let [N, M, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
M = +M;

input = input.split(' ').map(x=>+x);
input.sort((a,b) => a-b);
let cnt = 0;

let [a,b] = [0, input.length-1];
while (a!==b) {
    let [A,B] = [input[a], input[b]];
    if (A+B > M) b--;
    else if (A+B < M) a++;
    else {
        ++cnt;
        b--;
    }
}

console.log(cnt);