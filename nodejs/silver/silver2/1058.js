let [N, ...matrix] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N= +N;
matrix.forEach((x,i) => {
    matrix[i] = x.split('').map(y=>{
        switch(y) {
            case 'N':
                return 0;
            case 'Y':
                return 1;
        }
    })
});

let newMatrix = Array.from({length:N}, _=>new Array(N).fill(0));
for (let y = 0; y < N; ++y) {
    for (let x = 0; x < N; ++x) {
        for (let i = 0; i < N; ++i) {
            newMatrix[y][x] += matrix[y][i] * matrix[i][x];
        }
    }
}

let max = 0;
for (let y = 0; y < N; ++y) {
    let sum = 0;
    for (let x = 0; x< N; ++x) {
        if (y===x) continue;
        if (matrix[y][x] !== 0 || newMatrix[y][x] !== 0) sum++;
    }
    max = Math.max(sum, max);
}
console.log(max);