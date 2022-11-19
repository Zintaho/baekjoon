let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let output = '';
for (let i = 1; i <= N; ++i) {
    let [a,b] = input[i].split(' ');
    a = a.split('').sort((x,y)=> x.charCodeAt(0) - y.charCodeAt(0)).join('');
    b = b.split('').sort((x,y)=> x.charCodeAt(0) - y.charCodeAt(0)).join('');
    output += `${a===b?'P':'Imp'}ossible\n`;
}
console.log(output);