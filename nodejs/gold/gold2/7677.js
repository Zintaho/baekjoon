let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>Number(x) - 1);

let output = [];
for (let N of input.slice(0, input.length-1)) {
    let i = 0;
    let mat = [[1, 1, 1, 0]];
    let stack = [];

    while (N > 0) {
        let r = N%2===1?true:false;
        N = Math.floor(N/2);
        stack.push(r);
        mat.push(mul(mat[i], mat[i]));
        i++;
    }
    let answer = [1, 0, 0, 1];
    for (let i = 0; i < stack.length; ++i) {
        if (stack[i] === false) continue;
        answer = mul(answer, mat[i]);
    }

    if (N === -1) output.push(0);
    else output.push(answer[0]);
}

console.log(output.join('\n'));

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
    ].map(x=>x%10000);
}