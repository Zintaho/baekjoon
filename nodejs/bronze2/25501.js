let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let output = '';
for (let i = 1; i <= N; ++i) {
    let cnt = {cnt : 0};
    let result = isPalindrome(input[i], cnt);
    output += `${result} ${cnt.cnt}\n`;
}
console.log(output);

// functions

function recursion(s, l ,r, cnt) {
    cnt.cnt++;
    if (l >= r) return 1;
    else if (s[l] != s[r]) return 0;
    else return recursion (s, l+1, r-1, cnt);
}

function isPalindrome(s, cnt) {
    return recursion(s, 0, s.length - 1, cnt);
}