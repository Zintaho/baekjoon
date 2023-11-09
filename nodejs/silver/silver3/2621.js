let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
class Card {
    constructor(c, n) {
        this.color = c;
        this.number = n;
    }
};

const colors = {
    'R' :0, 'B' :0, 'Y' :0, 'G':0
};
const cards = new Array(5);
const numbers = new Array(10).fill(0);
input.forEach((x, i) => {
    let [c, n] = x.split(' ');
    n = +n;
    cards[i] = new Card(c, n);
    colors[c]++;
    numbers[n]++;
});
cards.sort((c1, c2) => c1.number - c2.number);

let isFiveColors = colors.R === 5 || colors.B === 5 || colors.Y === 5 || colors.G === 5;
let isStraight = (()=>{
    let a = cards[0].number;
    let result = true;
    for (let i = 1; i < 5; ++i) result &= (a+i === cards[i].number);
    return Boolean(result);
})();
let [isFourNumbers, fourNum] = (()=>{
    let result = false;
    let num = -1;
    for (let i = 0; i < 10; ++i) {
        if (numbers[i] === 4) {
            result = true;
            num = i;
            break;
        }
    }
    return [result, num];
})();
let [isThreeNumbers, threeNum] = (() => {
    let result = false;
    let num = -1;
    for (let i = 0; i < 10; ++i) {
        if (numbers[i] === 3) {
            result = true;
            num = i;
            break;
        }
    }
    return [result, num];
})();
let [isTwoNumbers, twoNumbers] = (() => {
    let result = false;
    let nums = [];
    for (let i = 0; i < 10; ++i) {
        if (numbers[i] === 2) {
            result = true;
            nums.push(i);
        }
    }
    nums.sort((a,b) => a-b);
    return [result, nums];
})();

if (isFiveColors && isStraight) console.log(900 + cards[4].number);
else if (isFourNumbers) console.log(800 + fourNum);
else if (isThreeNumbers && isTwoNumbers) console.log(10 * threeNum + twoNumbers[0] + 700);
else if (isFiveColors) console.log(600 + cards[4].number);
else if (isStraight) console.log(500 + cards[4].number);
else if (isThreeNumbers) console.log(400 + threeNum);
else if (isTwoNumbers && twoNumbers.length === 2) console.log(10 * twoNumbers[1] + twoNumbers[0] + 300);
else if (isTwoNumbers && twoNumbers.length === 1) console.log(200 + twoNumbers[0]);
else console.log(100 + cards[4].number);