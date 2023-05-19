let [NM, seq]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);
seq = seq.split(' ').map(x=>+x);
seq.sort((a,b ) => a-b);
let output = [];
let set = new Set();
all_permutation(N, M);
console.log(output.join('\n'));

function all_permutation(n, r, row=[]) {
    const len = row.length;
    if (len > 1 && row[len - 2] > row[len - 1] ) return;

    if (r === len) {
        const result = row.join(' ');
        if (!set.has(result)) {
            output.push(result);
            set.add(result);
        }
        return;
    }
    for (let i = 0; i < n; ++i) {
        let copied = [...row, seq[i]];

        all_permutation(n, r, copied);
    }
}