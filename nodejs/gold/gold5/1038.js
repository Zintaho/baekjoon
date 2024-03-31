let input = +require('fs').readFileSync('/dev/stdin').toString().trim();

let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let [start, end] = [0, list.length];

iterate();

function iterate() {
while (start !== end) {
    for (let i = start; i < end; ++i) {
        let a = list[i].toString();
        let last = Number(a.charAt(a.length - 1));
        
        for (let j = 0; j < last; ++j) {
            list.push(Number(a+j));
            if (list.length > input) return;
        }
    }
    start = end;
    end = list.length;
}
}

console.log(list.length <= input? -1 : list[input]);