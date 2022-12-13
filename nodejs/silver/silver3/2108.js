let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>parseInt(x, 10));
let N = input[0];
input = input.slice(1).sort((a,b)=>a-b);
let A = Math.round(input.reduce((a,b) => a+b) / input.length);
if (A === -0) A = +0;
let B = input[Math.floor(input.length/2)];
let D = input[input.length-1] - input[0];
let counts = {};
for (let c of input) {
    if (counts[c]) counts[c]++;
    else counts[c] = 1;
}
let cMap = {};
let vMax = 0;
for (let [k, v] of Object.entries(counts)) {
    k = parseInt(k, 10);
    if (v > vMax) vMax = v;
    if (cMap[v]) cMap[v].push(k);
    else cMap[v] = [k];
}
let vMaxList = cMap[vMax].sort((a,b)=>a-b);
let C = vMaxList.length > 1? vMaxList[1] : vMaxList[0];

console.log(A);
console.log(B);
console.log(C);
console.log(D);