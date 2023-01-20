let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
for (let i = 0; i < +N; ++i) {
    let [name, ...bd] = input[i].split(' ');
    bd = bd.map(Number);
    bd = bd[2]*10000 + bd[1]*100 + bd[0];
    const obj = {
        name,bd
    }
    input[i] = obj;
}
input = input.sort((a,b) => b.bd - a.bd);
console.log(`${input[0].name}\n${input[N-1].name}`);