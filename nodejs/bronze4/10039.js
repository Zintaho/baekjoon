let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let mapping = (x) => {
    x = parseInt(x, 10);
    if(x < 40) x = 40;
    return x;
}
let output = input.map(x => mapping(x)).reduce((a,b) => a+b)/5;
console.log(output);