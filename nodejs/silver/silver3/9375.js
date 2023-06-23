let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(+N);

let k = 0;
for (let i = 0; i < +N; ++i) {
    let n = +input[k++];
    let wears = {}
    let keys = new Set();
    for (let j = 0; j < n; ++j) {
        let [, key] = input[k++].split(' ');
        if (key in wears) wears[key]++;
        else wears[key] = 1;
        keys.add(key);
    }
    if (keys.size === 1) {
        keys.forEach((x) => {output[i] = wears[x]});
    } else {
        let sum = 1;
        keys.forEach((x) => {
            sum *= (wears[x]+1);
        });
        output[i] = sum-1;
    }
}
console.log(output.join('\n'));