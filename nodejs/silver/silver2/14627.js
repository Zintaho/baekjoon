let [SC, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [_, C] = SC.split(' ').map(Number);
input = input.map(Number);


let min = Infinity;
let [left, right] = [1, Math.max(...input)];
while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let count = 0;
    let leftover = 0;
    input.forEach((x) => {
        if (count < C) {
            let k = Math.floor(x / mid);
            if (k+count > C) {
                k = (C - count);
                leftover += (x - k*mid);
            } else {
                leftover += (x % mid);
            }
            count += k;
        } else {
            leftover += x;
        }
    });

    if (count >= C) {
        min = Math.min(min, leftover);
        left = mid + 1;
    } else if (count < C) {
        right = mid - 1;
    }
}
console.log(min);