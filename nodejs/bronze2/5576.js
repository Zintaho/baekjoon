let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
let [W, K] = [input.slice(0, 10), input.slice(10)];
let [wMax,kMax] = [[0,0,0],[0,0,0]];
for (let i = 0; i < 3; ++i) {
    let [wIdx, kIdx] = [-1, -1];
    for (let j = 0; j < W.length; ++j) {
        let [w,k] = [W[j], K[j]];
        if (w > wMax[i]) {wMax[i] = w; wIdx = j;}
        if (k > kMax[i]) {kMax[i] = k; kIdx = j;}
    }
    
    W.splice(wIdx, 1);
    K.splice(kIdx, 1);
}
console.log(`${wMax.reduce((a,b) => a+b)} ${kMax.reduce((a,b) => a+b)}`);