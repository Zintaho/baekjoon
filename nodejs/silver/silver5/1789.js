let input = +require('fs').readFileSync('/dev/stdin').toString().trim();
let a = Math.floor(Math.sqrt(input)*Math.sqrt(2));
for (let i = 0; i < 3; ++i) {
    let A = (a+i);
    A = A%2 === 0? (A/2 * (A+1)) : ((A+1)/2 * A);
    if (A > input) {console.log((a+i)-1); break;}
    else if (A === input) {console.log((a+i)); break;}
    
}