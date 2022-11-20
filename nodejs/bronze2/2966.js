let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let answer = input[1].slice(0, N);
let score = [0, 0, 0];
let response = [
    'ABC'.repeat(Math.ceil(N/3)).slice(0, N),
    'BABC'.repeat(Math.ceil(N/4)).slice(0, N),
    'CCAABB'.repeat(Math.ceil(N/6)).slice(0, N)
]
for (let i = 0; i < N; ++i) {
    let c = answer[i];
    for (let j = 0; j < 3; ++j) {
        if (c === response[j][i]) score[j]++;
    }
}
let max = Math.max(...score);
let name = ['Adrian', 'Bruno', 'Goran'];
console.log(max);
for (let j = 0; j < 3; ++j) {
    if (score[j] === max) console.log(name[j]);
}