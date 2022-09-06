let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
let k = 1;
let stars = new Array(N).fill('*');
let blanks = new Array(N-1).fill(' ');
let output = '';
for (i = 1; i != 0; i += k) {
    output += `${blanks.slice(0, N-i).join('')}${stars.slice(0,i).join('')}\n`
    if (i === N) k = -1;
}
console.log(output);