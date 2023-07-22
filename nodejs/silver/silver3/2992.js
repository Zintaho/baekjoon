let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let min = [...input];
min.sort();

let output = new Set();
all_permutation(input.length, input.length);
output = [...output];
output.sort();

let answer = -1;
for (let i = 0; i < output.length; ++i) {
    if (input === output[i]) {
        answer = i+1;
    }

    if (answer === i) {
        console.log(output[i]);
        break;
    }
}
if (answer === -1 || answer === output.length) console.log(0);

function all_permutation(n, r, checked=new Array(n).fill(false), row=[]) {
    if (r === row.length) {
        let tmp = '';
        row.forEach((x) => tmp += min[x-1]);
        output.add(tmp);
        return;
    }
    for (let i = 0; i < n; ++i) {
        let checkedCopied = [...checked];
        let copied = [...row, i+1];

        if ( checkedCopied[i] === false) {
            checkedCopied[i] = true;
            all_permutation(n, r, checkedCopied, copied);
        }
    }
}