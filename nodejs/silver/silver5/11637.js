let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
T = +T;

let i = 0;
let output = new Array(T);
for (let t = 0; t < T; ++t) {
    let N = +input[i++];

    let winners = [];
    let sum = 0;
    let maxScore = 0;
    for (let n = 0; n < N; ++n) {
        let score = +input[i++];
        sum += score;
        if (score > maxScore) {
            winners = [n+1];
            maxScore = score;
        } else if (score === maxScore) {
            winners.push(n+1);
        }
    }

    if (winners.length > 1) {
        output[t] = "no winner";
    } else if (maxScore*2 > sum) {
        output[t] = `majority winner ${winners[0]}`;
    } else {
        output[t] = `minority winner ${winners[0]}`;
    }
}

console.log(output.join('\n'));