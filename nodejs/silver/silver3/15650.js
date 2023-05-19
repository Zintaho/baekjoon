let [N, M]= require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
let output = [];
all_permutation(+N, +M);
console.log(output.join('\n'));

function all_permutation(n, r, checked=new Array(n).fill(false), row=[]) {
    const len = row.length;
    if (len > 1 && row[len - 2] > row[len - 1] ) return;
    if (r === len) {
        output.push(row.join(' '));
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