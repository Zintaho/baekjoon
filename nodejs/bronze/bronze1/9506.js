let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
let output = '';
input.forEach(x=>{
    x = +x;
    let listA = [1];
    let listB = [];
    for (let i = 2; i <= Math.sqrt(x); ++i) {
        j = Math.floor(x/i);
        if (i*j === x) {
            listA.push(i);
            listB.push(j);
        }
    }
    listB = listB.reverse();
    let sum = 0;
    let list = [...listA, ...listB];
    sum += list.reduce((a,b)=>a+b);
    output += `${x} ${x===sum?'= ' +list.join(" + "):"is NOT perfect."}\n`;
});
console.log(output);