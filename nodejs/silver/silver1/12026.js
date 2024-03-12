let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
let next = {B : 'O', O : 'J', J : 'B'};

let dp = new Array(N).fill(Infinity);
dp[0] = 0;

let queue = [0];
while (queue.length > 0) {
    let LEN = queue.length;
    let newQueue = [];
    for (let i = 0; i < LEN; ++i) {
        let k = queue[i]
        let c = input[k];
        let x = next[c];

        let d = 1;
        let score = dp[k];

        let K = N;
        if (i+1 < LEN) K = queue[i+1];

        for (let j = k+1; j < N; ++j, ++d) {
            if (x === input[j]) {
                dp[j] = Math.min(dp[j], score + d*d);
                if (!(j <= newQueue[newQueue.length - 1])) {
                    newQueue.push(j);
                }
            }
        }
    }
    queue = newQueue;
    
}
console.log(dp[N-1] === Infinity? -1 : dp[N-1])