/*
나쁜 풀이입니다.
정사각형 형태의 구간합을 사용해서 빼고 빼고 빼고 합하세요. (DP)
*/

let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);

let sumRows = new Array(N+1).fill(0).map(x=>new Array(N+1).fill(0));
let sumCols = new Array(N+1).fill(0).map(x=>new Array(N+1).fill(0));

let output = new Array(M);

input.forEach((a, i) => {

if (i < N) {
    a = a.split(' ').map(x=>+x);
    for (let j = 0; j < N; ++j) {
        sumRows[i+1][j+1] = a[j] + sumRows[i+1][j];
        sumCols[j+1][i+1] = a[j] + sumCols[j+1][i];
    }

} else {
    let [x1, y1, x2, y2] = a.split(' ').map(x=>+x);
    let [X, Y] = [x2-x1, y2-y1];

    let sum = 0;
    if (X > Y) {
        for (let y = y1; y < y2 +1; ++y) {
            sum += sumCols[y][x2] - sumCols[y][x1-1];
        }
    } else if (X <= Y) {
        for (let x = x1; x < x2 +1; ++x) {
            sum += sumRows[x][y2] - sumRows[x][y1-1];
        }
    }
    output[i-N] = sum;
}

});

console.log(output.join('\n'));