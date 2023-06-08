let [NQ, arr, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [ N, Q] = NQ.split(' ').map(x=>+x);
arr = arr.split(' ' ).map(x=> Number(x));

if (N > 1) {
    let newArr = new Array(N-1);
    newArr[0] = Math.abs(arr[1] - arr[0]);
    for (let i = 1; i < (N-1); ++i) {
        newArr[i] = newArr[i-1] + Math.abs(arr[i+1] - arr[i]);
    }
    newArr = [0, ...newArr];

    let output = new Array(Q);
    for (let i = 0; i < Q; ++i) {
        let [l, r] = input[i].split(' ').map(x=>+x);
        output[i] = newArr[r-1] - newArr[l-1];
    }

    console.log(output.join('\n'));
} else {
    let output = new Array(Q).fill(0);
    console.log(output.join('\n'));
}