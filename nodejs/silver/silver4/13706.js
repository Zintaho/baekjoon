let N = BigInt(require('fs').readFileSync(0, 'utf-8').trim());

let B = BigInt(`1${'0'.repeat(400)}`);
let [left, right] = [1n, B];

while (left <= right) {
    let mid = (left+right) / 2n;
    
    let M = mid*mid;
    if (M === N) {
        console.log(mid.toString());
        break;
    } else if (M < N) {
        left = mid + 1n;
    } else if (M > N) {
        right = mid - 1n;
    }
}