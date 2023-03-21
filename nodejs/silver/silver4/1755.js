let [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);

let map = {
    '0' : 'J',
    '1' : 'E',
    '2' : 'I',
    '3' : 'H',
    '4' : 'C',
    '5' : 'B',
    '6' : 'G',
    '7' : 'F',
    '8' : 'A',
    '9' : 'D'
}

let map2 = {
    'J' : '0',
    'E' : '1',
    'I' : '2',
    'H' : '3',
    'C' : '4',
    'B' : '5',
    'G' : '6',
    'F' : '7',
    'A' : '8',
    'D' : '9'
}

let words = new Array(b-a);
for (let k = a; k <= b; ++k) {
    let str = k.toString();
    let temp = [];
    for (let c of str) {
        temp.push(map[c]);
    }
    words[k-a] = temp.join(' ');
}
words.sort();
words = words.map(x=>{
    x = x.split(' ');
    for (let i = 0; i < x.length; ++i) {
        x[i] = map2[x[i]];
    }
    return x.join('');
})
for (let i = 0; i <= words.length; i+=10) {
    console.log(words.slice(i, i+10).join(' '));
}