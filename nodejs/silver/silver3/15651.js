let [N, M]= require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
let output = [];
all_permutation(+N, +M);
console.log(output.join('\n'));

function all_permutation(n, r, row=[]) {
    const len = row.length;
    if (r === len) {
        output.push(row.join(' '));
        return;
    }
    for (let i = 0; i < n; ++i) {
        let copied = [...row, i+1];
        all_permutation(n, r, copied);
    }
}