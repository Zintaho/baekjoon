let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(+T);
for (let i = 0; i < +T; ++i) {
    let N = +input[2*i];
    let row = input[2*i +1].split(' ');
    row.forEach((x,j) => {
        if (j === 0) {
            row[j] = +x;
        } else {
            row[j] = row[j-1] + +x;
        }
    });

    let max = row[0];
    for (let a = 0; a < +N; ++a) {
        for (let b = 0; b <= a; ++b) {
            if (a === b) {
                let A = row[a];
                if (A > max) max = A;
            } else {
                let A = row[a] - row[b];
                if (A > max) max = A;
            }
        }
    }
    output[i] = max;
}
console.log(output.join('\n'));