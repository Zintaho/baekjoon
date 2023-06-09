let [NK, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = NK.split(' ').map(x=>+x);
arr = arr.split(' ').map(x=>+x);

let k = 1;
let result = -1;
merge_sort(arr, 0, N-1);

function merge_sort(A, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2);
        merge_sort(A, p, q);
        merge_sort(A, q + 1, r);
        merge(A, p, q, r);
    }
}

function merge(A, p, q, r) {
    if (result !== -1) return;

    let [i, j, t] = [p, q+1, 0];
    let tmp = [];

    while (i <= q && j <= r) { // [p, q], [q+1, r]
        if (A[i] <= A[j]) tmp[t++] = A[i++];
        else tmp[t++] = A[j++];
    }

    while (i <= q) tmp[t++] = A[i++];
    while (j <= r) tmp[t++] = A[j++];

    i = p; t = 0;

    while (i <= r) {
        A[i++] = tmp[t++];
        if (k++ === K) {result = arr.join(' '); return;}
    }
}
if (N === 1 && K === 1) console.log(arr[0]);
else console.log(result);