let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(+N);


const isPalindrome = (str) => {
    let result = true;
    for (let i = 0; i < str.length/2; ++i) {
        if (str[i] !== str[str.length - i-1]) {
            result = false;
            break;
        }
    }
    return result;
}

let k = 0;
for (let i = 0; i < +N; ++i) {
    let K = +input[k];

    let words = input.slice(k+1, k+1+K);
    let result = '0';
    let breaker = false;
    for (let a = 0; a < K; ++a) {
        for (let b = 0 ; b < K; ++b) {
            if (a===b) continue;
            const word = words[a] + words[b];
            breaker = isPalindrome(word);
            if (breaker) {
                result = word;
                break;
            }
        }
        if (breaker) break;
    }
    output[i] = result;
    k += (K+1);
}
console.log(output.join('\n'));