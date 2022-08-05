let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (text of input.slice(0,input.length - 1)) {
    text = text.toLowerCase();
    text = text.split('').filter(x=>x=='a'||x=='e'||x=='i'||x=='o'||x=='u');
    output += `${text.length}\n`;
}
console.log(output);