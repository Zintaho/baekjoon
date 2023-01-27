let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = input[0].split(' ').map(x=>+x);
let A = input[1].split(' ').map(x=>+x);
let swapped = [];
const selection_sort = (A) => {
    for (let last = N-1; last >= 0; --last) {
        let [max, I] = [0, 0];
        for (let i = 0; i <= last; ++i) {
            if (A[i] > max) [max, I] = [A[i], i];
        }

        if (last != I) {
            let [a,b] = [A[I], A[last]];
            [A[last], A[I]] = [a,b];
            swapped.push([...A]);
        };
    }
}
selection_sort(A);
console.log(K>swapped.length? -1 : swapped[K-1].join(' '));