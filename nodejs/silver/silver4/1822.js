let [n, A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let setA = new Set();
A.split(' ').forEach((x)=>setA.add(+x));
B.split(' ').forEach((x)=>setA.delete(+x));
console.log(setA.size);
if (setA.size > 0) {
    let list = [...setA];
    list.sort((a,b) => a-b);
    console.log(list.join(' '));
}