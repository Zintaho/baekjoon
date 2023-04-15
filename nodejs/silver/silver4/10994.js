let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let I = 4*N - 3;
let output = new Array(I);

output[0] = output[I-1] = '*'.repeat(I);
for (let i = 1; i < N ; ++i) {
    output[2 * i - 1] = output [I - 2*i] = '* '.repeat(i) + ' '.repeat(I - 4*i) + ' *'.repeat(i);
    output[2*i] = output[I-2*i-1] = '* '.repeat(i) + '*'.repeat(I - 4*i) + ' *'.repeat(i);
}

console.log(output.join('\n'));