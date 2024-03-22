let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);

let checked = new Set();
console.log(bfs());

function bfs() {
    let sec = 0;
    let n = N;

    let queue = [];
    while (n <= 100000) {
        if (n === K) return sec;
        checked.add(n);
        queue.push(n);

        if (n === 0) break;
        n *= 2;
    }

    while (queue.length > 0) {
        ++sec;
        let newQueue = [];

        for (let x of queue) {
            let [a, b] = [x-1, x+1];

            while (0<= a && a <= 100000) {
                if (!checked.has(a)) {
                    if (a === K) return sec;
                    checked.add(a);
                    newQueue.push(a);
                }
                if (a === 0) break;
                a*= 2;
            }

            while (0<= b && b <= 100000) {
                if (!checked.has(b)) {
                    if (b === K) return sec;
                    checked.add(b);
                    newQueue.push(b);
                }
                b*= 2;
            }
        }

        queue = newQueue;
        // console.log(queue);
    }
}