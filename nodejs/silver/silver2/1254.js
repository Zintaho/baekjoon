let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let N = input.length;
const C = checkPalindromes();
console.log(C + (N-C)*2);


function checkPalindromes() {

    for (let i = 0; i <= N-1; ++i) {
        let [a,b] = [i, N-1];
        let isPalindrome = true;
        while (a <= b) {
            if (input.charAt(a) !== input.charAt(b)) {
                isPalindrome = false;
                break;
            }
            a++;
            b--;
        }
        if (isPalindrome) {
            return N-i;
        }
    }

}