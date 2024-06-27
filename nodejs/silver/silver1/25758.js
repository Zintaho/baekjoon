let [N, input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
N = +N;
input = input.split(' ');
let map = {};
let set = new Set();
for (let x of input) {
    if (!map[x]) map[x] = 1;
    else map[x]++;

    set.add(x);
}
set = [...set];
let LEN = set.length;
let result = new Set();
for (let i = 0; i < LEN; ++i) {
    for (let j = 0; j < LEN; ++j) {
        if (i === j && map[set[i]] === 1) continue; 
        
        let [a, b] = [set[i][0], set[j][1]];
        if (a >= b) result.add(a);
        else result.add(b);
    }
}
result = [...result];
result.sort();
console.log(result.length);
console.log(result.join(' '));