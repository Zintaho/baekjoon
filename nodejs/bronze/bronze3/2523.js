let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
let stars = new Array(N).fill('*');
let output = '';
for (i = 1; i<= N; ++i) {
    output += stars.slice(0, i).join('') + '\n';
}
for (i = N-1; i > 0; --i) {
    output += stars.slice(0, i).join('') + '\n';
}
console.log(output);