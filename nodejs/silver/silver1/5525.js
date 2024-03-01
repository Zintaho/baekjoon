let [N, M, S] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); 
N = +N;
M = +M;

let lalast = 'A';
let last = 'A';
let sum = 0;
let temp = 0;
for (let c of S) {
    switch (c) {
        case 'I':
            if ((lalast + last) === 'IO') temp++;
            else {
                if (temp >= N) sum += temp - (N-1);
                temp = 0;
            }
            break;
    }
    lalast = last;
    last = c;
}
if (temp >= N) sum += temp - (N-1);
console.log(sum);