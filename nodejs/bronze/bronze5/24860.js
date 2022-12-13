let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let ABC = Array(3);
for (i = 0 ; i < 3; ++i) {
    ABC[i] = input[i].split(' ').reduce((a, b) => parseInt(a) * parseInt(b), 1);
}
console.log(ABC[0]*ABC[2] + ABC[1]*ABC[2]);