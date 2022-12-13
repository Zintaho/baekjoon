let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
let queue = new Array(N);
for (let i = 1; i <= N; ++i) queue[i-1] = i;

while (queue.length > 1) {
    let len = queue.length;
    let last = queue[len-1];

    queue = queue.filter((a, idx) => idx%2 === 1);

    if (len %2 !== 0) queue.unshift(last);
}

console.log(queue[0]);