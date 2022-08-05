let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
input = input.map(x=>parseInt(x));
let rank = 1;
let mem = new Array(7).fill(0);
let N = 0;
for(k of input) {
    mem[k] += 1;
    if (mem[k] > 1) {
        N = k;
        rank += 1;
    }
    else if (mem[N] <= 1 && k > N) N = k;
}
switch(rank) {
    case 1:
        console.log(N*100);
        break;
    case 2:
        console.log(1000+N*100);
        break;
    case 3:
        console.log(10000+N*1000);
        break;
}