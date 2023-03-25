let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(N);
input.forEach((x,i) => {
    output[i]= `${i+1}. ${x}`;
});
console.log(output.join('\n'));