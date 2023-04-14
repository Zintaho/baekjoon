let [n, input, x]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
n = +n; x = +x;
input = input.split(' ').map(x=>+x);
input.sort((a,b) => a-b);

let [a,b] = [ 0, n-1];
let cnt = 0;
while (a !== b) {
    let [A,B] = [input[a], input[b]];
    if (A+B > x) --b;
    else if (A+B < x) ++a;
    else {
        ++cnt;
        --b;
    }
}

console.log(cnt);