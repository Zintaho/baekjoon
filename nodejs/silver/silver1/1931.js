let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.map((x=>x.split(' ').map(Number)));
input.sort((a,b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
});

let output = [input[0]];
for (let n = 1; n < N; ++n) {
    let [a,b] = input[n];
    let [lA, lB] = output[output.length - 1];

    if (lA === a && lA !== lB) continue;
    else if (lA < a&& a < lB) {
        if (b < lB) output[output.length - 1] = input[n];
    } else {
        output.push(input[n]);
    }
}

console.log(output.length);