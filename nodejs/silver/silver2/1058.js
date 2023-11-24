let [N, ...matrix] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N= +N;
matrix.forEach((x,i) => {
    matrix[i] = x.split('').map((y)=>{
        switch(y) {
            case 'N':
                return 0;
            case 'Y':
                return 1;
        }
    })
});

let friends = Array.from({length:N}, _=>new Array(N).fill(0))
for (let m = 0; m < N; ++m) {
    for (let y = 0; y < N; ++y) {
        for (let x = 0; x < N; ++x) {
            if (y===x) continue;
            if (matrix[y][x] === 1 || (matrix[y][m] + matrix[m][x]) === 2) friends[y][x] = 1;
        }
    }
}

let max = 0;
friends.forEach(x=>{
    max = Math.max(max, x.reduce((a,b) => a+b))
});
console.log(max);

