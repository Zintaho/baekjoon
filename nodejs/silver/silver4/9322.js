let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
T = +T;

let output = new Array(T);
for (let i = 0 ; i < T; ++i) {
    let tc = input.slice(4*i, 4*i + 4);
    let [N, p1, p2, ct] = [+tc[0], tc[1].split(' '), tc[2].split(' '), tc[3].split(' ')];

    let [p2Map, rule] = [{}, new Array(N)];
    for (let j = 0; j < N; ++j) {
        p2Map[p2[j]] = j;
    }
    for (let j = 0; j < N; ++j) {
        rule[j] = p2Map[p1[j]];
    }
    let result = new Array(N);
    for (let j = 0 ; j < N; ++j) {
        result[j] = ct[rule[j]];
    }
    output[i] = result.join(' ');
}

console.log(output.join('\n'));

/* https://www.acmicpc.net/problem/9322 */