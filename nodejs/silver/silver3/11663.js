let [NM, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
let points = input[0].split(' ').map(Number);
points.sort((a,b) => a - b);
input = input.slice(1).map(x => x.split(' ').map(Number));

let output = new Array(M);
for (let m = 0; m < M; ++m) {
    let [a, b] = input[m];

    let [A, B] = [0, N-1];

    let [left, right] = [0, N-1];
    // a
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let t = points[mid];

        if (a === t) {
            A = mid - 1;
            break;
        } else if (a < t) {
            A = mid - 1;
            right = mid - 1;
        } else if (a > t) {
            A = mid;
            left = mid + 1;
        }
    }

    // b
    [left, right] = [0, N-1];
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let t = points[mid];

        if (b === t) {
            B = mid;
            break;
        } else if (b < t) {
            B = mid - 1;
            right = mid - 1;
        } else if (b > t) {
            B = mid;
            left = mid + 1;
        }
    }

    output[m] = B- A;
}

console.log(output.join('\n'))