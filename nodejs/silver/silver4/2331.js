let [A, P]= require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
P = +P;

let arr = [A];
let set = new Set();
set.add(A);

while (true) {
    A = gen(A, P);
    if (set.has(A)) {
        const i = arr.indexOf(A);
        arr = arr.slice(0, i);
        break;
    } else {
        arr.push(A);
        set.add(A);
    }
}

console.log(arr.length);


function gen(a, p) {
    let sum = 0;
    a.split('').forEach((x) => {
        sum += Math.pow(+x, p);
    });
    return sum.toString();
}