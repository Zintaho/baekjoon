let [xa, ya, xb, yb, xc, yc] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>Number(x));
let segments = [
    [Math.sqrt(Math.pow((xb-xa), 2) + Math.pow((yb-ya), 2)), 'ab'],
    [Math.sqrt(Math.pow((xc-xa), 2) + Math.pow((yc-ya), 2)), 'ac'],
    [Math.sqrt(Math.pow((xc-xb), 2) + Math.pow((yc-yb), 2)), 'bc'],
];
segments.sort((a,b)=>b[0]-a[0]);
let [a,b,c] = segments;

let output = "-1.0";
let [s1,s2, s3] = [getslope(a[1]), getslope(b[1]), getslope(c[1])];
if (s1 !== s2 || s1 !== s3 || s2 !== s3) output = 2*(a[0]-c[0]);
console.log(output);

function getslope(key) {
    let [x1, y1, x2, y2] = [0,0,0,0];
    switch(key) {
        case 'ab':
            [x1, y1, x2, y2] = [xa, ya, xb, yb];
            break;
        case 'ac':
            [x1, y1, x2, y2] = [xa, ya, xc, yc];
            break;
        case 'bc':
            [x1, y1, x2, y2] = [xb, yb, xc, yc];
            break;
    }
    if (x1 === x2) return 0;
    return (y2-y1)/(x2-x1);
}