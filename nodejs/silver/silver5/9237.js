let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let trees = input[1].split(' ').map(x=>+x);
trees = trees.sort((a,b)=>b-a);
let max = 0;
trees.forEach((tree, i) => {
    if (max < tree+i+1) max = tree + i + 1;
});
console.log(max+1);