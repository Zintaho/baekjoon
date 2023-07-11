let [N, word, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N - 1;

word = word.split('');
word.sort();

let count = 0;
for (let i = 0; i < N; ++i) {
    let main = [...word];
    let sub = input[i].split('');
    sub.sort();
    let [a,b] = [0,0];
    while (a < main.length && b < sub.length) {
        let [A, B] = [main[a], sub[b]];
        if (A===B) {
            main[a] = '';
            sub[b] = '';
            a++;
            b++;
        } else if (A<B)a++;
        else if (A>B)b++;
    }
    main = main.join('');
    sub = sub.join('');
    let [aLen, bLen] = [main.length, sub.length];
    if (aLen === 0 && bLen === 0) count++;
    else if (aLen === 1 && bLen === 0) count++;
    else if (aLen === 0 && bLen === 1) count++;
    else if (aLen === 1 && bLen === 1) count++;
}
console.log(count);