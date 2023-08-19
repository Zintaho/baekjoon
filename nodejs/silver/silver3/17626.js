let N = +require('fs').readFileSync('/dev/stdin').toString().trim();

get();

function get() {
let min = 4;
for (let a = Math.floor(Math.sqrt(N)); a >= 1; --a) {
    let n = N;
    if (a*a === N) {console.log(1); return;}

    for (let b = Math.floor(Math.sqrt(N - a*a)); b >= 1; --b) {
        if (b*b === (N - a*a)) {console.log(2); return;}

        for (let c = Math.floor(Math.sqrt(N - a*a - b*b)); c >= 1; --c) {
            if (c*c === (N - a*a - b*b)) min = 3;
        }
    }
}
console.log(min);
}