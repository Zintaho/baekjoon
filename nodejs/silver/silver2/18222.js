let k = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim());

console.log(get(k));

function get(a) {
    if (a === 1n) return 0;
    else {
        n = 1n;
        while (true) {
            if ( n * 2n < a) {
                n *= 2n;
            } else break;
        }
        return get(a-n)^1;
    }

}