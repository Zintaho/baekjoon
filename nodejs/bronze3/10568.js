let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0], 10);
let output = '';
for (let i = 1; i<= T; ++i) {
    let [v,e] = input[i].split(' ').map(x=>parseInt(x, 10));
    output += `${-(v-e-2)}\n`
}
console.log(output);