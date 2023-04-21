let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let score = {
    'A+' : 430,
    'A0' : 400,
    'A-' : 370,
    'B+' : 330,
    'B0' : 300,
    'B-' : 270,
    'C+' : 230,
    'C0' : 200,
    'C-' : 170,
    'D+' : 130,
    'D0' : 100,
    'D-' :  70,
    'F'  :   0
}

let S = 0;
let K = 0;
for (let i = 0; i < +N; ++i) {
    let [, k, s] = input[i].split(' ');
    K += +k;
    S += (+k) * (score[s]);
}
let output = (S/K).toFixed(0).split('');
output.splice(1,0,'.');
console.log(output.join(''));