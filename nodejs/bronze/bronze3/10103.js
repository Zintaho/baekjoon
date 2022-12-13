let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let [a,b] = [100, 100];
for( let i = 1; i<= N; ++i) {
    let [da, db] = input[i].split(' ').map(x=>parseInt(x, 10));
    if (da > db) b -= da;
    else if (da < db) a -= db ;
}
console.log(a);
console.log(b);