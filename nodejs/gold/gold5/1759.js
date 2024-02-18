let [LC, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [L, C] = LC.split(' ').map(x=>+x);

input = input.split(' ');
input.sort();

let output = [];
dfs();
console.log(output.join('\n'))


function dfs(pw='', start=0, end=C-L+1, vowel=0, consonant=0) {
    if (pw.length === L) {
        if (vowel >= 1 && consonant >= 2) {
            output.push(pw);
        } return;
    }
    if (start >= C) return;

    for (let c = start; c < end; ++c) {
        let ch = input[c];
        let newStart = c+1;
        let newEnd = C + c - pw.length;
        if (newEnd >= C) newEnd = C;

        switch(ch) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                dfs(pw+ch, start=newStart, end=newEnd, vowel+1, consonant);
                break;
            default:
                dfs(pw+ch, start=newStart, end=newEnd, vowel, consonant+1);
                break;
        }
    }
}