let [A,B,C,N] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);

let result = false;
for (let c = Math.floor(N/C); c >= 0; --c) {
    for (let b = Math.floor((N-c*C)/B); b >= 0; --b) {
        for (let a = Math.floor((N-c*C-b*B)/A); a >= 0; --a) {
            if (Math.floor(N-c*C-b*B-a*A) === 0) result = true;
            if (result) break;
        }
        if (result) break;
    }
    if (result) break;
}
console.log(result?'1':'0');