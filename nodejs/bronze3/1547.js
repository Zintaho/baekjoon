let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0] , 10);
let abc = [0, 1, 2, 3];
for (i = 1; i<=N; ++i) {
    let [X,Y] = input[i].split(' ').map(x=>parseInt(x, 10));
    abc[0] = abc[X];
    abc[X] = abc[Y];
    abc[Y] = abc[0];
}
for (i=1; i<=3; ++i) {
    if (abc[i] === 1) {
        console.log(i);
        break;
    }
}