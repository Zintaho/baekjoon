let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = +input[0];

let output = '';
let I = 1;
for (let t = 0; t < T; ++t) {
    let [A,B] = [0, ''];
    for (let i = I+1; i < (I + +input[I] + 1); ++i) {
        let [a,b] = input[i].split(' ');
        a = +a;

        if (a > A) {A = a; B = b;}
    }
    output += `${B}\n`;
    I += +input[I] + 1;
}
console.log(output);