let [n, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let set = new Set();
for (let i = 0; i < +n; ++i) {
    let word = input[i];
    word = word.split('');
    word.sort();
    word = word.join('');
    set.add(word);
}
console.log(set.size);