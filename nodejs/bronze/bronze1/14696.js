let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let score = {
    '1' : 1n,
    '2' : 1000n,
    '3' : 1000000n,
    '4' : 1000000000n
}
let output = '';
for (let i = 1; i < 2*N; i += 2) {
    let [aN, ...aR] = input[i].split(' ');
    let [bN, ...bR] = input[i+1].split(' ');
    let [aS, bS] = [0n, 0n];
    aR.forEach(x=>aS+=score[x]);
    bR.forEach(x=>bS+=score[x]);
    let result = '';
    if (aS > bS) result = 'A';
    else if (aS < bS) result = 'B';
    else result = 'D';
    output += `${result}\n`;
}
console.log(output);