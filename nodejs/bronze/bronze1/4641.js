let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(0,-1);
input=input.map(x=>x.split(' ').slice(0,-1).map(x=>+x));
let output = new Array(input.length);
for (let i = 0; i < input.length; ++i) {
    let set = new Set(input[i]);
    let cnt = 0;
    for (let k of input[i]) {
        if (set.has(k*2)) ++cnt;
    }
    output[i] = cnt;
}
console.log(output.join('\n'));