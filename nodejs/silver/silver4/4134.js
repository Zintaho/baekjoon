let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(+n);
for (let i = 0 ; i < +n; ++i) {
    let a = +input[i];
    if (a === 0) a = 2;
    else if (a === 1) a = 2;
    while (true) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(a); ++j) {
            if (a % j === 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) {
            output[i] = a;
            break;
        }
        a++;
    }
}
console.log(output.join('\n'));