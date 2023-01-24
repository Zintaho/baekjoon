let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let regex = new RegExp(/\d{1,6}/g);
let found;  
let sum = 0;
while (found = regex.exec(input[1])) {
    sum += parseInt(found[0], 10);
}
console.log(sum);