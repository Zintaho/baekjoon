let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let set = new Set();
set.add(0);

let seq = [1,5,10,50];
for (let i = 0; i < N; ++i) backtrack();
console.log(set.size);

function backtrack() {
    let tempSet = new Set();
    for (let a of set) {
        for (let s of seq) {
            tempSet.add(a+s);
        }
    }
    set = tempSet;
}