let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0], 10);
let output = '';
for (let i = 1; i<= T; ++i) {
    let [a,b] = input[i].split(' ').map(x=>parseInt(x, 10));
    let sum = 0;
    if (15 < a && a <= 21) sum += 10;
    else if (10 < a && a <= 15) sum += 30;
    else if (6 < a && a <= 10) sum += 50;
    else if (3 < a && a <= 6) sum += 200;
    else if (1 < a && a <= 3) sum += 300;
    else if (1 === a) sum += 500;

    if (15 < b && b <= 31) sum += 32;
    else if (7 < b && b<= 15) sum += 64;
    else if (3 < b && b<= 7) sum += 128;
    else if (1 < b && b <= 3) sum += 256;
    else if (1 === b) sum += 512;

    sum *= 10000;
    output += `${sum}\n`;
}
console.log(output);