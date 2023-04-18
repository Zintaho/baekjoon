let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let cnt = 0;
let set = new Set();
for (let i = 0; i < +N; ++i) {
    let row = input[i];
    if (row === "ENTER") {
        set.clear();
        continue;
    }
    if (!set.has(row)) {
        cnt++;
        set.add(row);
    }
}
console.log(cnt);