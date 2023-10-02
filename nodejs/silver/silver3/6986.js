let [NK, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = NK.split(' ').map(x=>+x);
input = input.map(Number);
input.sort((a,b) => a-b);

console.log(A(N,K).toFixed(2));
console.log(B(N,K).toFixed(2));

function A(n, k) {
    let newInput = input.slice(k, n-k);
    return (newInput.reduce((a,b) => a+b) / newInput.length) + 1e-8;
}
function B(n, k) {
    for (let i = 0; i < k; ++i) {
        input[i] = input[k];
        input[n - i - 1] = input[n - k - 1];
    }
    return (input.reduce((a,b) => a+b) / input.length) + 1e-8;
}