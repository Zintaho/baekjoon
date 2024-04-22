let [NM, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
let count = 0;
if (input) {
    
input = input.split(' ').map(Number);
let start = 0;

while (true) {
    let m = M;
    while (true) {
        let a = input[start];
        if (m >= a) m-=a;
        else break;

        start++;
    }
    count++;
    if (start >= N) break;
}

}

console.log(count);
