let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let map = {}
for (let n = 0; n < +N; ++n) {
    let name = input[n];
    if (map[name]) map[name]++;
    else map[name] = 1;
}

input = input.slice(+N);
for (let n = 0; n < +N - 1; ++n) {
    let name = input[n];
    map[name]--;
    if (map[name] === 0) delete map[name];
}

for (let key of Object.keys(map)) console.log(key);