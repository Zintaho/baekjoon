let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let set = new Set();
for (let i = 0; i < input.length; ++i) {
    let a = input.charAt(i);
    switch(a) {
        case 'M':
        case 'O':
        case 'B':
        case 'I':
        case 'S':
            set.add(a);
    }
}
console.log(set.size===5?'YES':'NO');