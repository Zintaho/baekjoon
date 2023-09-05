let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.forEach((x, i) => input[i] = x.split(' ').map(x=>+x));
let min = 1000000001;

function recur(sour = 1, bitter = 0, pick = true, cnt = -1) {
    if (cnt ===  +N) {
        if (sour === 1 && bitter === 0) return;
        else {
            min = Math.min(min, Math.abs(sour-bitter));
            return;
        }
    } else if (cnt >= 0) {
        if (pick) {
            sour *= input[cnt][0];
            bitter += input[cnt][1];
        }
    }
    recur(sour, bitter, true, cnt+1);
    recur(sour, bitter, false, cnt+1);
}

recur();
console.log(min);