let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = +input[0];

let tNums = new Array(44);
for (let n = 1; n <= 44; ++n) tNums[n-1] = n*(n+1)/2;
let tSet = new Set();
for (let a = 0; a < 44; ++a) {
    let [A, B, C] = [tNums[a],0,0];
    for (let b = 0; b < 44; ++b) {
        B = tNums[b];
        if (1000 - A - B < 0) break;
        for (let c = 0; c < 44; ++c) {
            C = tNums[c];
            if (1000 - A - B - C < 0) break;
            tSet.add(A+B+C);
        }
    }
}

let output = '';
for (let t = 1; t <= T; ++t) {
    let K = +input[t];
    output += `${tSet.has(K)?'1':'0'}\n`;
}
console.log(output);