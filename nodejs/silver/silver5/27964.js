let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.split(' ');

let re = new RegExp(/^.*Cheese$/g);
let set = new Set();

for (let c of input) {
    if (c.match(re)) set.add(c);
}

console.log(set.size>=4?"yummy":"sad");