let [doc, word] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;
while (true) {
    let a = doc.search(word);
    if ( a === -1) break;

    count++;
    doc = doc.substring(a + word.length, doc.length);
}
console.log(count);