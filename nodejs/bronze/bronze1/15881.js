let [N, ppap] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let k = -2;
let idx = 0;
let cnt = 0;
while(k != -1) {

    k = ppap.substring(idx).indexOf("pPAp");
    if (k != -1) {
        idx += (4+k);
        cnt++;
    }
}
console.log(cnt);