let [info, ...candidates]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let game = {
    'Y' : 1, 'F' : 2, 'O' : 3
}

let [N, type] = info.split(' ');
N = +N;

let set = new Set();

candidates.forEach((x) => set.add(x));

console.log(parseInt(set.size / game[type]))