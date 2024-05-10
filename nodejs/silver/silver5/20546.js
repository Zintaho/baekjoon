let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.split(' ').map(Number);

let A = N;
let a = 0;
let B = N;
let b = 0;

let upCount = 0;
let downCount = 0;
let lastPrice = input[0];
for (let price of input) {
    // A
    if (A >= price) {
        let k = Math.floor(A / price);
        a += k;
        A -= k * price;
    }
    // B
    if(upCount >= 3) {
        B += b * price;
        b = 0;
    } else if(downCount >= 3) {
        let k = Math.floor(B / price);
        B -= k * price;
        b += k;
    }


    if (lastPrice < price) {
        upCount++;
        downCount = 1;
    } else if (lastPrice > price) {
        downCount++;
        upCount = 1;
    } else if (lastPrice === price) {
        downCount = 1;
        upCount = 1;
    }

    lastPrice = price;
}

let last = input[input.length - 1];
let aScore = last * a + A;
let bScore = last * b + B;
if (aScore > bScore) console.log("BNP");
else if (aScore === bScore) console.log("SAMESAME");
else if (aScore < bScore) console.log("TIMING");