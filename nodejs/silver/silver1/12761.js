let [A, B, N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);

let checked = new Set();
console.log(bfs());

function bfs() {
    let sec = 0;
    let sequence = [
        x => x-1,
        x => x+1,
        x => x-A,
        x => x+A,
        x => x-B,
        x => x+B,
        x => x*A,
        x => x*B
    ]
    let queue = [N];
    while (queue.length) {
        let newQueue = [];
        for (let i = 0; i < queue.length; ++i) {
            let a = queue[i];
            if (a === K) return sec;
            checked.add(a);

            for (let s of sequence) {
                let b = s(a);
                if (a === b) continue;
                if (b === K) return sec+1;

                if (!checked.has(b) &&  0 <= b && b <= 100000) {
                    checked.add(b);
                    newQueue.push(b);
                }
            }
        }
        queue = newQueue;
        sec++;
    }
}