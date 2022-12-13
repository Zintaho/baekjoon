let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0], 10);
let output = '';
let a = [1,2,3,3,4,10];
let b = [1,2,2,2,3,5,10];
for(let i = 1; i <= 2*T; i += 2) {
    let As = input[i].split(' ').map(x=>parseInt(x, 10));
    let A = 0;
    for (let j = 0; j < 6; ++j) {
        A += As[j]*a[j];
    }
    let Bs = input[i+1].split(' ').map(x=>parseInt(x, 10));
    let B = 0;
    for (let j = 0; j < 7; ++j) {
        B += Bs[j]*b[j];
    }
    let result = '';
    if (A>B) {
        result = 'Good triumphs over Evil';
    } else if (A<B) {
        result = 'Evil eradicates all trace of Good';
    } else if (A===B) {
        result = 'No victor on this battle field';
    }

    output += `Battle ${Math.ceil(i/2)}: ${result}\n`;
}
console.log(output);