let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (num of input.slice(0,input.length-1)) {
    num = parseFloat(num);
    let sum = 1;
    let delta = num;
    for (i = 0 ; i < 4; ++i) {
        sum += num;
        num*=delta;
    }
    output += `${sum.toFixed(2)}\n`;
}
console.log(output);