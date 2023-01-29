let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let r = /BUG/g
while (true) {
    let newinput = input.replace(r, '');
    if (newinput.length === input.length) break;
    input = newinput;
}
console.log(input);