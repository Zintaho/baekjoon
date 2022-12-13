let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let output = [];
let cam = new Set("CAMBRIDGE".split(''));
for (let c of input) {
    if (!(cam.has(c))) output.push(c);
}
console.log(output.join(''));