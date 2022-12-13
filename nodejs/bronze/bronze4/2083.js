let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (i = 0 ; i < input.length -1 ; ++i) {
    let [name, age, weight] = input[i].split(' ');
    age = parseInt(age, 10);
    weight = parseInt(weight, 10);
    output += `${name} ${age>17 || weight>=80?'Senior':'Junior'}\n`;
}
console.log(output);