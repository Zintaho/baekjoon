let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
let a = new Array(N-1).fill(' ');
let b = new Array(2*N - 1).fill('*');
let output = ''
for (i = N; i >= 1; --i) {
    output += a.slice(0, N-i).join('');
    output += `${b.slice(0,2*i - 1).join('')}\n`;
}
console.log(output);