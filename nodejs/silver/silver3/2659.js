let [A, B, C, D] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
let temp = [
    `${A}${B}${C}${D}`,
    `${B}${C}${D}${A}`,
    `${C}${D}${A}${B}`,
    `${D}${A}${B}${C}`,
].map(x=>+x);
temp.sort((a,b) => a-b);
let N = temp[0];

let set = new Set();
let nums = [];
a();

function a() {
for (let a = 1; a <= 9; ++a) {
    for (let b = 1; b <= 9; ++b) {
        for (let c = 1; c <= 9; ++c) {
            for (let d = 1; d <= 9; ++d) {
                let temp = [
                    `${a}${b}${c}${d}`,
                    `${b}${c}${d}${a}`,
                    `${c}${d}${a}${b}`,
                    `${d}${a}${b}${c}`
                ].map(x=>+x).filter(x=>!set.has(x));
                temp.sort((a,b) => a-b);
                if (temp.length > 0 ) nums.push(temp[0]);
                if ( temp[0] === N) {
                    console.log(nums.length);
                    return;
                }
                for (let t of temp) set.add(t);
            }
        }
    }
}
}