let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N,M] = input[0].split(' ').map(x=>+x);
let [map, list] = [new Object(), new Array(N)];
for (let i = 1; i <= N; ++i) {
    map[input[i]] = i;
    list[i-1] = input[i];
}
input = input.slice(N+1);
let output = new Array(M);
for (let i = 0; i < M; ++i) {
    let row = input[i];
    let intRow = parseInt(row);
    if (intRow) {
        output[i] = list[intRow-1];
    } else {
        output[i] = map[row];
    }
}
console.log(output.join('\n'));