let N = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());
N-=1n;
let mat = [[1n, 1n, 1n, 0n]];
let stack = [];

let i = 0;
while (N > 0n) {
    let r = N%2n===1n?true:false;
    N/=2n;
    stack.push(r);
    mat.push(mul(mat[i], mat[i]));
    i++;
}
let answer = [1n, 0n, 0n, 1n];
for (let i = 0; i < stack.length; ++i) {
    if (stack[i] === false) continue;
    answer = mul(answer, mat[i]);
}
if (N === -1n) console.log(0);
else console.log(answer[0].toString());

function mul(matA, matB) {
    /*
    0 1     0 1
    2 3     2 3
    */
    return [
        matA[0] * matB[0] + matA[1] * matB[2],
        matA[0] * matB[1] + matA[1] * matB[3],
        matA[2] * matB[0] + matA[3] * matB[2],
        matA[2] * matB[1] + matA[3] * matB[3]
    ].map(x=>x%1_000_000_007n);
}