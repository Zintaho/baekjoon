let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let output = '';
for (let i = 1; i <= N; ++i) {
    let [L, D] = input[i].split('-');
    L = L.split('').map((x,idx)=>(x.charCodeAt(0) - 'A'.charCodeAt(0))*Math.pow(26, 2-idx)).reduce((a,b)=>a+b);
    D = parseInt(D, 10);
    output += `${Math.abs(L-D) <= 100?'':'not '}nice\n`;
}
console.log(output);