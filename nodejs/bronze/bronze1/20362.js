let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, winner] = input[0].split(' ');
let answermap = {};
for (let i = 1; i <=N; ++i) {
    let [name, response] = input[i].split(' ');
    if (!(response in answermap)) answermap[response] = 0;

    if (name === winner) {
        console.log(answermap[response]);
        break;
    }

    answermap[response]++;
}