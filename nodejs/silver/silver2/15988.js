let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
T = +T;
input = input.map(x=>+x);
let N = Math.max(...input);
let checkSet = new Set(input);
let answerSet = {};
let memo = new Array(4).fill(0).map(_=>new Array(4).fill(0));
memo[0][3] = 1;
memo[1][1] = 1;
memo[2][1] = 1;
memo[2][2] = 1;

answerSet[1] = 1;
answerSet[2] = 2;
for (let k = 3; k <= N; ++k) {
    let [a_0,a_1,a_2,a_3] = [k%4, (k-1)%4, (k-2)%4, (k-3)%4];
    memo[a_0][1] = (memo[a_1][1] + memo[a_1][2] + memo[a_1][3])%1000000009;
    memo[a_0][2] = (memo[a_2][1] + memo[a_2][2] + memo[a_2][3])%1000000009;
    memo[a_0][3] = (memo[a_3][1] + memo[a_3][2] + memo[a_3][3])%1000000009;
    if (checkSet.has(k)) {
        answerSet[k] = (memo[a_0][1] + memo[a_0][2] + memo[a_0][3])%1000000009;
    }
}
let output = new Array(T);
for (let t = 0; t < T; ++t) {
    output[t] = answerSet[input[t]];
}
console.log(output.join('\n'));