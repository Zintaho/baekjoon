let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
function sort(a,b) {
    let [aa, ab] = a.split(' ');
    let [ba, bb] = b.split(' ');

    if (aa > ba) {
        return 1;
    } else if (aa === ba) {
        if (ab < bb) {
            return 1;
        } else if (ab === bb) {
            return 0;
        } else if (ab > bb) {
            return -1;
        }
    } else if (aa < ba) {
        return -1;
    }
}
input.sort(sort);
console.log(input.join('\n'));