let [NSP, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N,S,P] = NSP.split(' ').map(x=>+x);
let newinput = [];
if (input) {
    input = input.split(' ').map(x=>+x);
    newinput = [...input];
} else {
    input = [];
}

newinput.push(S);
newinput.sort((a,b) => b-a);
if (newinput.length > P) newinput = newinput.slice(0, P);

let i = newinput.indexOf(S);
if (i >=0) {
    // 중복 여부 파악
    let j = input.lastIndexOf(S);
    if (j>=0 && (j+1) >= P) i = -1;
    else i++;
}
console.log(i);