let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = [];

const re = new RegExp(/[a-z]+/g);

for (let i = 0; i < +N; ++i) {
    input[i].replaceAll(re, ' ').trim().split(' ').forEach((x) => {
        if(x === '') return;
        output.push(BigInt(x));
    });
}

output.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
});

console.log(output.join('\n'));