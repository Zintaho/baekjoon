const nth_perm = function(array, n) {
    let arr = [...array];
    let len = arr.length;
    let f = 1;
    for (let i = 2; i<=len; ++i) f*=i;

    let temp = [];
    if (n >= 0 && n < f) {
        for (;len > 0; len--) {
            f /= len;
            let i = Math.floor(n/f);
            n %= f;
            temp.push(arr[i]);
            arr.splice(i,1);
        }
        return temp;
    } else {
        return false;
    }
}

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = [];
for (let x of input) {
    let [str, n] = x.split(' ');
    let arr = str.split('');
    n = +n;
    let nperm = nth_perm(arr, n-1);
    output.push(`${str} ${n} = ${nperm?nperm.join(''):"No permutation"}`);
}
console.log(output.join('\n'));