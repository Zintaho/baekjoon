let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let regex = new RegExp(/^[A-F]?A+F+C+[A-F]?$/g);

let output = new Array(+T);
for (let t = 0; t < +T; ++t) {
    let target = input[t];
    output[t] = target.search(regex)===0?"Infected!":"Good";
}
console.log(output.join('\n'));