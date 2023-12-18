let [K, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
K = +K;
input = input.split(' ');

let resultCount = 0;
let min = '';
let max = '';
get();
console.log(max);
console.log(min);

function get(count = 0, arr=new Array(), check=new Array(10).fill(false)) {
    if (count++ > K) {
        let result = arr.join('');
        if (resultCount++ === 0) min = result;
        else max = result;
        return;
    }
    for (let i = 0; i <= 9; ++i) {
        let newArr = [...arr];
        let newCheck = [...check];
        if (check[i] === false) {

            if (arr.length > 0) {
                let [a, b] = [arr[count-2], i];
                let op = input[count-2];
                switch(op) {
                    case '>':
                        if (a < b) continue;
                        break;
                    case '<':
                        if (a > b) continue;
                        break;
                }
            }

            newCheck[i] = true;
            newArr.push(i);
            get(count, newArr, newCheck);
        }
    }
}