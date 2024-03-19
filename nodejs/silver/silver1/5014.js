let [F, S, G, U, D] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let check = new Array(F+1).fill(0);
check[0] = 1;

let depth = 0;
let queue = [S];
console.log(bfs()?depth : "use the stairs");

function bfs() {
    while (queue.length > 0) {
        let newQueue = [];
        for (let i = 0; i < queue.length; ++i) {
            let now = queue[i];
            if (now === G) return true;

            if (U > 0) {
                let u = now + U;
                if (u <= F && check[u] === 0) {
                    newQueue.push(u);
                    check[u] = 1;
                }
            }
            if (D > 0) {
                let d = now - D;
                if (d > 0 && check[d] === 0) {
                    newQueue.push(d);
                    check[d] = 1;
                }
            }
        }

        queue = newQueue;
        depth++;
    }
    return false;
}