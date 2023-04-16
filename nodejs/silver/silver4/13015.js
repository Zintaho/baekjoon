let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let output = new Array(2*N - 1);
output[0] = output[2*N - 2] = '*'.repeat(N) + ' '.repeat(2*N - 3) +'*'.repeat(N);
for (let i = 1; i <= (N-1); ++i) {
    output[i] = output[2*N - 2 - i] = ' '.repeat(i) + '*' + ' '.repeat(N-2) + `${i !== N - 1?('*' +  ' '.repeat(2*N - 3 - 2*i) + '*') : '*'}` + ' '.repeat(N-2) + '*';
}
console.log(output.join('\n'))