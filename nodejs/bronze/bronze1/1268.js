let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.map(x=>x.split(' ').map(x=>+x));

let classes = new Array(5).fill(0);
classes.forEach((_, i) => {
    classes[i] = new Array(9).fill(0).map(_ => new Set());
})

for (let i = 0; i < N; ++i) {
    let theirClass = input[i];
    for (let j = 0; j < 5; ++j) {
        classes[j][theirClass[j]-1].add(i+1);
    }
}

let count = new Array(N).fill(0).map(_=>new Set());
for (let n = 0; n < N; ++n) {
    for (let i = 0; i < 5; ++i) {
        for (let j = 0; j < 9; ++j) {
            const c = classes[i][j];
            if (c.has(n+1)) {
                for (let cc of c) {
                    if (cc === n+1) continue;
                    count[n].add(cc);
                }
            }
        }
    }
}

let output = 1;
let max = 0;
for (let i = 0; i < N; ++i) {
    let cnt = count[i].size;
    if (cnt > max) {
        max = cnt;
        output = i+1;
    }
}
console.log(output);