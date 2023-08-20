let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let chars = new Array(26).fill(0);

let A = 'A'.charCodeAt(0);
for (let c of input) {
    chars[c.charCodeAt(0) - A] ++;
}

let [a,b,c] = ['', '', ''];
for (let i = 0 ; i < 26; ++i) {
    let k = chars[i];
    let C = String.fromCharCode(i+A);

    if (k === 0) continue;
    else if (k === 1) b += C;
    else if (k % 2 === 0) {
        a += C.repeat(k/2);
        c += C.repeat(k/2);
    } else if (k % 2 === 1) {
        a += C.repeat(Math.floor(k/2));
        b += C;
        c += C.repeat(Math.floor(k/2));
    }
}

c = c.split('').reverse().join('');

let palindrome = a+b+c;
let isPalindrome = true;
for (let i = 0; i < palindrome.length/2; ++i) {
    if (palindrome.charAt(i) !== palindrome.charAt(palindrome.length - i - 1)) {
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome?palindrome:"I'm Sorry Hansoo");