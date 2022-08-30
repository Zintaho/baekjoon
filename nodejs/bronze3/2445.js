
let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
let a = new Array(N-1).fill(' ');
let b = new Array(N).fill('*');
let output = ''
for (i = 1; i < N; ++i) {
    output += `${b.slice(0,i).join('')}`;
    output += a.slice(0, N-i).join('');
    output += a.slice(0, N-i).join('');
    output += `${b.slice(0,i).join('')}\n`;
}
for (i = N; i >= 1; --i) {
    output += `${b.slice(0,i).join('')}`;
    output += a.slice(0, N-i).join('');
    output += a.slice(0, N-i).join('');
    output += `${b.slice(0,i).join('')}\n`;
}
console.log(output);