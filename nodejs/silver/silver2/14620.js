let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N =+N;
input.forEach((x, i) =>  {
    input[i] = x.split(' ').map(Number);
});

let min = 3000;
let seq = [];
let M = (N-2)*(N-2);
for (let i = 0; i < M; ++i) {
    for (let j = 0; j < M; ++j) {
        for (let k = 0; k < M; ++k) {
            if (i === j || j === k || i === k) continue;
            seq.push([i, j, k]);
        }
    }
}

for (let s of seq) {
    let [p1, p2, p3] = s;
    let [y1, x1] = getPoint(p1);
    let [y2, x2] = getPoint(p2);
    let [y3, x3] = getPoint(p3);

    let check = Array.from({length : N} , _=>new Array(N).fill(0));
    let sum = 0;
    sum += fill(sum, check, y1, x1);
    sum += fill(sum, check, y2, x2);
    sum += fill(sum, check, y3, x3);

    let isValid = true;
    for (let y = 0; y < N; ++y) {
        for (let x = 0; x < N; ++x) {
            if (check[y][x] > 1) {
                isValid = false;
                break;
            }
        }
        if (!isValid) break;
    }

    if (isValid) min = Math.min(min, sum);
}

console.log(min);

function getPoint(p) {
    let y = Math.floor(p / (N-2)) + 1;
    let x = p % (N-2) + 1;
    return [y, x];
}

function fill(sum, check, y, x) {
    sum = -input[y][x];
    check[y][x]--;

    for (let i = -1; i <= 1; ++i) {
        sum += input[y+i][x];
        sum += input[y][x+i];
        check[y+i][x]++;
        check[y][x+i]++;
    }
    
    return sum;
}