let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(input.length);
for (let i = 0; i < input.length; ++i) {
    let [A,B] = input[i].split(' ');
    let [a,b] = [0, 0];
    let cnt = 0;
    while (a < A.length && b < B.length && cnt < A.length) {
        let [ac, bc] = [A.charAt(a), B.charAt(b)];
        if (ac === bc) {++a; ++cnt;}
        ++b;
    }
    output[i] = cnt === A.length?'Yes':'No';
}
console.log(output.join('\n'));