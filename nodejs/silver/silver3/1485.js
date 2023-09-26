let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
T = +T;

let output = new Array(T);
for (let t = 0; t < T; ++t) {
    let points = input.slice(t*4, t*4+4).map(x=>x.split(' ').map(y=>Number(y)));
    points.sort((a,b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });
    let result = true;
    //하 우 상 좌
    let vecs = [
        getVec(points[0], points[1]),
        getVec(points[1], points[3]),
        getVec(points[2], points[3]),
        getVec(points[0], points[2]),
    ];
    result &= isSameVec(vecs[0], vecs[2]);
    result &= isSameVec(vecs[1], vecs[3]);
    if (result) {
        result &= isSameScalar(vecs[0], vecs[1]);
    }
    if (result) {
        result &= isSquare(vecs[0], vecs[1]);
    }
    output[t] = result?1:0;
}
console.log(output.join('\n'));

function getVec(p1, p2) {
    return [p2[0] - p1[0], p2[1] - p1[1]];
}
function isSameVec(v1, v2) {
    return v1[0] === v2[0] && v1[0] === v2[0];
}
function isSameScalar(v1, v2) {
    return v1[0]*v1[0] + v1[1]*v1[1] === v2[0]*v2[0] + v2[1]*v2[1];
}
function isSquare(v1, v2) {
    return v1[0]*v2[0] + v1[1]*v2[1] === 0;
}