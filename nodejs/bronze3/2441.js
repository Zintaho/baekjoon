let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
let output = '';
let A = new Array(N).fill('*');
let B = new Array(N).fill(' ');
for (let i = N ; i > 0; --i) {
    output += B.slice(0, N- i).join('') + A.slice(0, i).join('') + '\n';
}
console.log(output);