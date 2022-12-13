let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(x=>+x);

let set = new Set();
let K = input[1].split(' ').map(x=>+x);
for (let k of K) {
    for (let x = k; x <= N; x += k) {
        set.add(x);
    }
}

console.log([...set].reduce((a,b)=>a+b, 0));