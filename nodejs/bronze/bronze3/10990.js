let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
let arr = new Array(2*N-1).fill(' ');
let output = `${arr.slice(0, (N-1)).join('')}*\n`;
for (i = 1; i < N; ++i) {
    output += `${arr.slice(0, (N-1-i)).join('')}*${arr.slice(0, 2*i-1).join('')}*\n`;
}
console.log(output);