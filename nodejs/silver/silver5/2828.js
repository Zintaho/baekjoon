let [nm, J, ...apples] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = nm.split(' ').map(x=>+x);
J = +J;
let [a,b] = [1, M];
let sum = 0;
for (let j = 0; j < J; ++j) {
    let apple = +apples[j];
    if (apple > N) {
        continue;
    }
    else if (apple < a) {
        let k = a - apple;
        sum += k;
        [a,b] = [apple, b-k];
    } else if (a <= apple && apple <= b) {
        continue;
    } else if (b < apple) {
        let k = apple-b;
        sum += k;
        [a,b] = [a+k, apple];
    }
}
console.log(sum);