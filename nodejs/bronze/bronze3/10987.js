let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let sum = 0;
for (let c of input) {
    switch (c) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            sum += 1;
            break;
    }
}
console.log(sum);