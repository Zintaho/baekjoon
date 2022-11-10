let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let map = {};
let list = [];

for (let i = 1; i <= N; ++i) {
    const c = input[i][0];
    if (map[c]) map[c]++;
    else map[c] = 1;

    if (map[c] === 5) list.push(c);
}
if (list.length === 0) console.log("PREDAJA");
else {
    list = list.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));
    console.log(list.join(''));
}