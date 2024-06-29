let [N, input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
N = +N;
input = input.split(' ').map(Number);

let numCheck = new Array(999).fill(0);
let set = new Set();

for (let num of input) {
    numCheck[num - 1]++;
    set.add(num);
}
set = [...set];
let LEN = set.length;
let max = 0;

for (let i = 0; i < LEN; ++i) {
    for (let j = 0; j < LEN; ++j) {
        let [a, b] = [set[i], set[j]];
        if (i === j && numCheck[a-1] === 1) continue;
        max = Math.max(max, get(a, b))
    }
}
console.log(max);

function get(a, b) {
    let n = (a*b).toString();
    let sum = n.split('').map(x=>+x).reduce((a,b) => a+b);

    return sum;
}