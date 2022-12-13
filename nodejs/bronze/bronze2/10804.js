let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let cards = new Array(20).fill(0).map((x, i) => x + i + 1);
for (let row of input) {
    [a,b] = row.split(' ').map(x=>parseInt(x, 10));
    let rSliced = cards.slice(a-1,b).reverse();
    cards.splice(a-1, b-a+1, ...rSliced);
}
console.log(cards.join(' '));