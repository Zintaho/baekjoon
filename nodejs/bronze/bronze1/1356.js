let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let output = 'NO';
if (input.length > 1) {
    for (let sp = 1; sp < input.length; ++sp) {
        let a = input.substring(0, sp).split('').map(x=>+x).reduce((x,y)=>x*y);
        let b = input.substring(sp).split('').map(x=>+x).reduce((x,y)=>x*y);
        if (a === b) {
            output = 'YES';
            break;
        }
    }
}
console.log(output);