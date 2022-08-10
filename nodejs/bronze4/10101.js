let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>parseInt(x));
let sum = input[0] + input[1] + input[2];
let output = 'Error';
if (sum == 180) {
    let m = new Set(input);
    switch(m.size) {
        case 3:
            output = 'Scalene';
            break;
        case 2:
            output = 'Isosceles';
            break;
        case 1:
            output = 'Equilateral';
            break;
    }
}
console.log(output);