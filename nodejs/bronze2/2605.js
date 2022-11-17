let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    toString() {
        return `${this.prev?.value||'X'}<-${this.value}->${this.next?.value||'X'}`;
    }
}
let N = +input[0];
let nums = input[1].split(' ').map(x=>parseInt(x, 10));
let last = new Node(1);
for (let i = 2; i<= N; ++i) {
    const node = new Node(i);
    const K = nums[i-1];
    if (K === 0) {
        last.next = node;
        node.prev = last;
        last = node;
    } else {
        let temp = last;
        for (let k = 1; k < K; ++k) {
            temp = temp.prev;
        }
        node.next = temp;
        node.prev = temp.prev; 
        temp.prev = node;
    }
}
const output = new Array(N);
while(last) {
    output[--N] = last.value;
    last = last.prev;
}
console.log(output.join(' '));