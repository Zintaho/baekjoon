let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let sum = .0;
let N = .0;
for (let row of input) {
    let [,a,b] = row.split(' ');
    a = parseFloat(a);
    switch (b) {
        case 'A+': b = 4.5; break;
        case 'A0': b = 4.0; break;
        case 'B+': b = 3.5; break;
        case 'B0': b = 3.0; break;
        case 'C+': b = 2.5; break;
        case 'C0': b = 2.0; break;
        case 'D+': b = 1.5; break;
        case 'D0': b = 1.0; break;
        case 'F' : b = 0.0; break;
        case 'P' : b = 0.0; a = 0.0; break;
    }
    sum += a*b;
    N += a;
}
console.log((sum/N).toPrecision(7));