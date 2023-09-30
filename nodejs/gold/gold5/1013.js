let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let RE = new RegExp(/^(100+1+|01)+$/g);

let output = new Array(+T);
for (let t = 0 ; t< +T; ++t) {
    output[t] = (input[t].search(RE)===0?'YES':'NO');
}
console.log(output.join('\n'));