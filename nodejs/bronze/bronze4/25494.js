let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
T = +T;

output = new Array(T);
for (let t = 0; t < T; ++t) {
    output[t] = Math.min(...input[t].split(' ').map(x=>+x));
}
console.log(output.join('\n'));