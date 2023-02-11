let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N,M] = input[0].split(' ').map(x=>+x);
let output = new Array(M);
let sum = 0;
let chars = ['T', 'G', 'C', 'A'];
for (let m = 0; m < M; ++m) {
    let [C, min] = ['Z', N];
    for (let c of chars) {
        let b = 0;
        for (let n = 1; n <= N; ++n) {
            let a = input[n].charAt(m);
            if (c != a) b++;
        }
        if (min >= b) {C = c; min=b;}
    }
    output[m] = C;
    sum += min;
}
console.log(`${output.join('')}\n${sum}`);