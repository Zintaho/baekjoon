let [n, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);

let memo = new Array(4).fill(0).map(_=>new Array(4).fill(0).map(_=>new Array()));
memo[0][0] = [];
memo[0][1] = [];
memo[0][2] = [];
memo[0][3] = [];

memo[1][0] = [];
memo[1][1] = ['1'];
memo[1][2] = [];
memo[1][3] = [];

memo[2][0] = [];
memo[2][1] = ['1+1'];
memo[2][2] = ['2'];
memo[2][3] = [];

memo[3][0] = [];
memo[3][1] = ['1+1+1', '2+1'];
memo[3][2] = ['1+2'];
memo[3][3] = ['3'];

for (let k = 4; k <= n; ++k) {
    let [a_0,a_1,a_2,a_3] = [k%4, (k-1)%4, (k-2)%4, (k-3)%4];
    memo[a_0][0] = [];
    memo[a_0][1] = [];
    memo[a_0][2] = [];
    memo[a_0][3] = [];
    for (let a_1_1 of memo[a_1][1]) memo[a_0][1].push(a_1_1+'+1');
    for (let a_1_2 of memo[a_1][2]) memo[a_0][1].push(a_1_2+'+1');
    for (let a_1_3 of memo[a_1][3]) memo[a_0][1].push(a_1_3+'+1');

    for (let a_2_1 of memo[a_2][1]) memo[a_0][2].push(a_2_1+'+2');
    for (let a_2_2 of memo[a_2][2]) memo[a_0][2].push(a_2_2+'+2');
    for (let a_2_3 of memo[a_2][3]) memo[a_0][2].push(a_2_3+'+2');

    for (let a_3_1 of memo[a_3][1]) memo[a_0][3].push(a_3_1+'+3');
    for (let a_3_2 of memo[a_3][2]) memo[a_0][3].push(a_3_2+'+3');
    for (let a_3_3 of memo[a_3][3]) memo[a_0][3].push(a_3_3+'+3');
}
let output = [];
for (let arr of memo[n%4]) output.push(...arr)
output.sort();
let answer = K <= output.length? output[K-1]:"-1";
console.log(answer);