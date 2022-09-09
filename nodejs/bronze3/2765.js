let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (let i = 1; i <= input.length; ++i) {
    let [d, r, s] = input[i-1].split(' ').map(x=>Number(x));
    if (r == 0) break;

    let distance = d/63360*r*Math.PI;
    let hour = s/3600;
    let mph = distance/hour;
    output += `Trip #${i}: ${distance.toFixed(2)} ${mph.toFixed(2)}\n`;
}
console.log(output);