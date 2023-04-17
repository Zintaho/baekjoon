let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let memory = new Array(3).fill(1);
memory[0] = 0;

let k = 0;
let loop = [
    [1, 2, 0],
    [2, 0, 1],
    [0, 1, 2]
];
for (let i = 3; i <= N; ++i) {
    if (k === 3) k = 0;
    let [a0, a1, a2] = loop[k++];

    memory[a2] = (memory[a0] + memory[a1])%1000000007;
}

console.log((memory[N%3]));