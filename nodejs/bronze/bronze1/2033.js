let input = +require('fs').readFileSync('/dev/stdin').toString().trim();

let k = 10;
while(input >= k) {
    let a = input%k;
    if (a >= k/2) input += (k - a);
    else input -= a;
    k *= 10;
}
console.log(input);