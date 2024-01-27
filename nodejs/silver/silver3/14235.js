let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

class Heap {
    constructor() {
        this.heap = [];
    }

    _parent(a) {
        if (a === 0) return 0;

        return Math.floor((a-1) / 2);
    }

    _child(a) {
        let [l, r] = [a*2 + 1, a*2 + 2];
        if (l >= this.heap.length) return a;
        else if (r >= this.heap.length) return l;

        if (this.heap[l] >= this.heap[r]) return l;
        else return r;
    }

    _check(a, b) {
        if (a===b) return false;

        return (this.heap[a] > this.heap[b]);
    }

    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    heapUp() {
        let [a, b] = [this.heap.length - 1, this._parent(this.heap.length - 1)];
        while (this._check(a, b)) {
            this._swap(a, b);
            a = b;
            b = this._parent(a);
        }
    }

    heapDown() {
        let [a, b] = [this._child(0), 0];
        while (this._check(a, b)) {
            this._swap(a, b);

            b = a;
            a = this._child(b);
        }
    }

    push(a) {
        this.heap.push(a);
        this.heapUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        let out = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapDown();

        return out;
    }

    length() { return this.heap.length; }
}

let gifts = new Heap();
let output = [];

for (let n = 0; n < +N; ++n) {
    let a = input[n].trim().split(' ').map(Number);
    if (a[0] === 0) output.push(gifts.length() > 0? gifts.pop() :-1);
    else {
        for (let aa of a.slice(1)) gifts.push(aa);
    }
}
console.log(output.join('\n'));