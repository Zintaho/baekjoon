let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let a = input[0].split(' ').map(x => parseInt(x));
let b = input[1].split(' ').map(x => parseInt(x));
console.log(`${b[0]-a[2]} ${Math.floor(b[1]/a[1])} ${b[2]-a[0]}`);