let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = []
for (let t = 0; t < +T; ++t) {
    let set = new Set(input[4*t + 1].split(' '));
    input[4*t + 3].split(' ').forEach((x) => {
        output.push(set.has(x)?1:0);
    })
}
console.log(output.join('\n'));