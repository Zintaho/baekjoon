let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
let output = new Array(N);
const isPalindrome = (str) => {
    str = str.toString();
    let len = str.length;
    let result = true;
    for (let i = 0 ; i < Math.floor(len/2); ++i) {
        if (str.charAt(i) !== str.charAt(len - (i+1))) {
            result = false;
            break;
        }
    }

    return result;
}
let chars = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', '#'
]
for (let i = 0; i < N; ++i) {
    let num = +input[i];
    let result = isPalindrome(num);

    let k = 2;
    while (!result && k <= 9) {
        result = isPalindrome(num.toString(k++));
    }
    k = 11;
    while (!result && k <= 36) {
        result = isPalindrome(num.toString(k++));
    }
    while (!result && k <= 64) {
        let temp = '';
        let a = num;

        // 회문 검사이므로 뒤집을 필요 없음
        while (a >= k) {
            let mod = a%k;
            temp += chars[mod];
            a -= mod;
            a/=k;
        }
        temp += chars[a];

        result = isPalindrome(temp);
        k++;
    }

    output[i] = result?'1':'0';
}
console.log(output.join('\n'));