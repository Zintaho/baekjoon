let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let N = input.length;
let output = [
    new Array(5+4*(N-1)).fill('.'),
    new Array(5+4*(N-1)).fill('.'),
    new Array(5+4*(N-1)).fill('.'),
    new Array(5+4*(N-1)).fill('.'),
    new Array(5+4*(N-1)).fill('.'),
]

for (let i = 1; i <= N; ++i) {
    if (i%3 === 0) continue;
    let c = input[i-1];
    let a = '#';
    output[0][2 + 4*(i-1)] = a;
    output[1][1 + 4*(i-1)] = a;
    output[1][3 + 4*(i-1)] = a;
    output[2][0 + 4*(i-1)] = a;
    output[2][2 + 4*(i-1)] = c;
    output[2][4 + 4*(i-1)] = a;
    output[3][1 + 4*(i-1)] = a;
    output[3][3 + 4*(i-1)] = a;
    output[4][2 + 4*(i-1)] = a;
}
for (let i = 3; i <= N; i+=3) {
    let c = input[i-1];
    let a = '*';
    output[0][2 + 4*(i-1)] = a;
    output[1][1 + 4*(i-1)] = a;
    output[1][3 + 4*(i-1)] = a;
    output[2][0 + 4*(i-1)] = a;
    output[2][2 + 4*(i-1)] = c;
    output[2][4 + 4*(i-1)] = a;
    output[3][1 + 4*(i-1)] = a;
    output[3][3 + 4*(i-1)] = a;
    output[4][2 + 4*(i-1)] = a;
}

let realOutput = new Array(5);
output.forEach((x, i) => {
    realOutput[i] = x.join('');
})
console.log(realOutput.join('\n'));