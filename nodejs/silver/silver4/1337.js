let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>+x);
input.sort((a,b) => a-b);

let min = 4;
for (let i = 0; i < +N; ++i) {
    let M = Math.min(N, i+5);
    let [a, k] = [input[i], 4];
    for (let j = i+1; j < M; ++j) {
        b = input[j];
        if (a + 5 > b) --k;
        else break;
    }
    min = Math.min(k, min);
}
console.log(min);
