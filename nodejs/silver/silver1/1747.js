let N = +require('fs').readFileSync('/dev/stdin').toString().trim();

let primes = [];
let erat = new Array(1003002).fill(true);
erat[0] = false;
erat[1] = false;
for (let i = 2; i <= 1003001; ++i) {
    if (!erat[i]) continue;
    if (erat[i]) {
        primes.push(i);

        if (i >= N) {
            if (isPalindrome(i)) {
                console.log(i);
                break;
            }
        }

        for (let j = i; j <= 1003001; j += i) {
            erat[j] = false;
        }
    }
}

function isPalindrome(k) {
    k = k.toString();
    L = k.length;
    let result = true;
    for (let i = 0; i < Math.floor(L/ 2); ++i) {
        if (k.charAt(i) !== k.charAt(L - i-1)) {
            result = false;
            break;
        }
    }
    return result;
}