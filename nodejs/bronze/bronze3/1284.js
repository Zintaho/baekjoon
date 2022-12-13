let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (let n of input.slice(0, -1)) {
    let sum = 2 + n.length - 1;
    for (let k of n) {
        switch(k) {
            case '0':
                sum += 4;
                break;
            case '1':
                sum += 2;
                break;
            default:
                sum += 3;
                break;
        }
    }
    output += `${sum}\n`
}
console.log(output);