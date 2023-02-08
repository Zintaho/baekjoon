let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let [NC, NF] = N%2 === 0?[N/2, N/2] : [(N+1)/2, (N-1)/2];
let arr = new Array(NF);
let newArr = new Array(N);

for (let i = 0 ; i < NC; ++i) {
    newArr[i] = 2*i + 1;
}
for (let i = NF-1; i >= 0; --i) {
    arr[i] = 2*i + 2;
}

let i = NC;
if (N%2=== 0) {
    while (i < N) {
        newArr[i++] = arr.shift();
        arr.push(arr.shift());
    }   
} else {
    while (i < N) {
        arr.push(arr.shift());
        newArr[i++] = arr.shift();
    }     
}
console.log(newArr.join(' '));