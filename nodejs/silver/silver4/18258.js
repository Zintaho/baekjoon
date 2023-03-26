let [N, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = [];

let head = null;
let tail = null;
let size = 0;
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

for (let row of input) {
    let [a,b] = row.split(' ');
    if (b) {
        b = +b;
        switch(a) {
            case 'push':
                const node = new Node(b);
                if (head) {
                    tail.right = node;
                    node.left = tail;
                } else {
                    head = node;
                }
                tail = node;
                size++;
                break;
        }
    } else {
        switch(a) {
            case 'pop':
                if (size <= 0) output.push(-1)
                else {
                    const pop = head;
                    head = head.right;
                    output.push(pop.value);
                    --size;
                    if (size === 0) {
                        tail = null;
                    }
                }
                break;
            case 'size':
                output.push(size);
                break;
            case 'empty':
                output.push(size>0?0:1);
                break;
            case 'front':
                output.push(head?.value||-1);
                break;
            case 'back':
                output.push(tail?.value||-1);
                break;
        }
    }
}
console.log(output.join('\n'));