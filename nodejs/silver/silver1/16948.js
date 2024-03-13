let [N, RRCC] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
let check = Array.from({length:N}, _ => new Array(N).fill(0));

let [r1, c1, r2, c2] = RRCC.split(' ').map(Number);
bfs(r1, c1);

function bfs(r, c) {
    let queue = [[r , c]];
    let sequence = [
        [-2, -1],
        [-2, +1],
        [0, -2],    
        [0, +2],
        [+2, -1],
        [+2, +1]
    ];

    let depth = 0;
    check[r1][c1] = 1;
    while (queue.length > 0) {

        let newQueue = [];
        let LEN = queue.length;
        for (let i = 0; i < LEN; ++i) {
            let [ra, ca] = queue.pop();
            if (ra === r2 && ca=== c2) return console.log(depth);
    
            for (seq of sequence) {
                let [rd, cd] = seq;
                let [rb, cb] = [ra + rd, ca + cd];
                if (0 <= rb && rb < N && 0 <= cb && cb < N && check[rb][cb] === 0) {
                    newQueue.push([rb, cb]);
                    check[rb][cb] = 1;
                }
            }
        }

        queue = newQueue;
        depth++;
    }
    return console.log(-1);
}