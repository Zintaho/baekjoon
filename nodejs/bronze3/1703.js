let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (i = 0; i < input.length - 1; ++i) {
    let tree = input[i].split(' ').map(x=>parseInt(x, 10));
    let a = parseInt(tree[0], 10);
    let sum = 1;
    for (j = 1; j < 2*a; j += 2) {
        sum *= tree[j];
        sum -= tree[j+1];
    }
    output += `${sum}\n`;
}
console.log(output);