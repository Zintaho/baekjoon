let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = [];
for (let row of input) {
    if (row === "0") break;
    let [n, ...seq] = row.split(' ');
    seq = seq.map(x=>+x);
    all_permutation(seq, +n);
    output.push('');
}
output = output.slice(0, output.length-1);
console.log(output.join('\n'));

function all_permutation(seq, n, r=6, checked=new Array(n).fill(false), row=[]) {
    const len = row.length;
    if (len > 1 && row[len - 2] > row[len - 1] ) return;
    if (r === len) {
        output.push(row.join(' '));
        return;
    }
    for (let i = 0; i < n; ++i) {
        let checkedCopied = [...checked];
        let copied = [...row, seq[i]];

        if ( checkedCopied[i] === false) {
            checkedCopied[i] = true;
            all_permutation(seq, n, r, checkedCopied, copied);
        }
    }
}