let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(+T);
for (let t = 0; t < T; ++t) {
    let [N, logs] = [input[2*t], input[2*t+1]];
    N = +N;
    logs = logs.split(' ').map(Number);
    logs.sort((a,b) => a-b);
    let answer = new Array(N).fill(0);
    for (let i = 0; i < Math.ceil(N/2); ++i) answer[i] = logs[2*i];
    for (let i = 0; i < Math.floor(N/2); ++i) answer[N -i - 1] = logs[2*i + 1];

    let max = Math.abs(answer[N-1] - answer[0]);
    for (let n = 0; n < N - 1; ++n) {
        max = Math.max(max, Math.abs(answer[n] - answer[n+1]));
    }
    output[t] = max;
}
console.log(output.join('\n'));