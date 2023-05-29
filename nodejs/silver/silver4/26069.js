let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let dancers = new Set();
dancers.add("ChongChong");
for (let i = 0; i < +n; ++i) {
    let [a,b] = input[i].split(' ');
    if(dancers.has(a) || dancers.has(b)) {
        dancers.add(a);
        dancers.add(b);
    }
}
console.log(dancers.size);