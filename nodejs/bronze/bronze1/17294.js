let num = require('fs').readFileSync('/dev/stdin').toString().trim();
let isCute = true;
let [d, len] = [0, num.length];
if (len > 2) d = num.charCodeAt(0) - num.charCodeAt(1);
for (let i = 1; i < len - 1; ++i) {
    let dd = num.charCodeAt(i) - num.charCodeAt(i+1);
    if (dd !== d) {
        isCute = false;
        break;
    }
}

console.log(`${isCute?"◝(⑅•ᴗ•⑅)◜..°♡ 뀌요미!!":"흥칫뿡!! <(￣ ﹌ ￣)>"}`); 