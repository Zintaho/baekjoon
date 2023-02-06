let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];

let office = new Set();
for (let n = 1; n <= N; ++n) {
    let [name, io] = input[n].split(' ');
    switch (io) {
        case "enter":
            office.add(name);
            break;
        case "leave":
            office.delete(name);
            break;
    }
}
console.log([...office].sort((a, b) => a < b ? 1 : -1).join('\n'));