let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let scores = new Array(N).fill(0);
let result = new Array(3).fill(0).map(()=>new Object());;
let playerScores = new Array(N);
for (let n = 1; n <= N; ++n) {
    playerScores[n-1] = input[n].split(' ').map(x=>+x);
    for (let i = 0; i < 3; ++i) {
        let k = playerScores[n-1][i];
        if (k in result[i]) result[i][k]++;
        else result[i][k] = 1;
    }
}
for (let n = 0; n < N; ++n) {
    for (let i = 0; i < 3; ++i) {
        let score = playerScores[n][i];
        let k = result[i][score];
        if (k === 1) scores[n] += score;
    }
}
console.log(scores.join('\n'));