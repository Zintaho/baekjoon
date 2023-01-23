let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let len = input.length;
let set = new Set();
for (let i = 0; i < len; ++i) {
    for (let j = i+1; j <= len; ++j) {
        set.add(input.substring(i,j));
    }
}
console.log(set.size);