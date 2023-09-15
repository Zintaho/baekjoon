let [N, skills] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let queue = [];
let stack = [];

let k = 1;
skills = skills.split(' ');
for (let i = +N - 1; i >= 0; --i) {
    const skill = skills[i];
    switch (skill) {
        case '1':
            queue.push(k)
            break;
        case '2':
            const last = queue.pop();
            queue.push(k, last);
            break;
        case '3':
            stack.push(k);
            break;
    }
    k++;
}
queue=queue.reverse()
console.log([...queue, ...stack].join(' '));