let [NM, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);
board.forEach((x,i) => board[i] = x.split(' '));
let max = 0;
for (let n = 0; n < N; ++n) {
    for (let m = 0; m < M; ++m) {
        let k = 1;
        let check = board[n][m] === '0';
        while(check) {
            for (let y = n - k; y <= n +k ; ++y) {
                if (!check) break;
                if (y < 0 || y >= N) continue;
                for (let x = m - k; x <= m + k ; ++x) {
                    if (!check) break;
                    if (y === n && x === m) continue;
                    if (x < 0 || x >= M) continue;
                    if (board[y][x] === '1') {
                        max = Math.max(max, k);
                        check = false;
                    }
                }
            }
            if(!check) break;
            ++k;
        }
    }
}
console.log(max);