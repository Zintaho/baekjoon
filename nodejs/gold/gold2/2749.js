let N = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());
let cycle = 1500000;

N = N%BigInt(cycle);
N = Number(N.toString());

let arr = new Array(cycle);
arr[0] = 0;
arr[1] = 1;
arr[2] = 1;

let k = 3;
while (k < cycle) {
    arr[k] = (arr[k-1]+arr[k-2])%1000000;
    k++;
}

console.log(arr[N]);