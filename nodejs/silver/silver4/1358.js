let [WHXYP, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [W, H, X, Y, P] = WHXYP.split(' ').map(x=>+x);
R = (H/2);
let [A,B, A_] = [X, Y+R, X+W];

let count = 0;
for (let i = 0; i < P; ++i) {
    let result = false;
    let [x,y] = input[i].split(' ').map(x=>+x);
    result = result || checkL(x, y);
    result = result || checkM(x, y);
    result = result || checkR(x, y);
    if (result) count++;
}
console.log(count);

function checkL(x, y) {
    let result = (A-x)*(A-x) + (B-y)*(B-y) <= R*R;

    return result;
}

function checkM(x, y) {
    let result = true;
    result = result && (X <= x) && (x <= (X+W));
    result = result && (Y <= y) && (y <= (Y+H));
    return result;
}

function checkR(x, y) {
    let result = (x - A_)*(x - A_) + (B - y)*(B - y) <= R*R;

    return result;
}