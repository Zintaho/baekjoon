let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
T = +T;

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

        if (this.heap[l] <= this.heap[r]) return l;
        else return r;
    }

    _check(a, b) {
        if (a===b) return false;

        return (this.heap[a] < this.heap[b]);
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
}

let output = new Array(T);
for (let t = 0; t < T; ++t) {
    const heap = new Heap();
    let [n, arr] = [input[2*t], input[2*t + 1]];
    n = +n;
    arr = arr.split(' ').map(Number);
    for (let i = 0; i < n; ++i) heap.push(arr[i]);
    
    let sum = 0;
    for (let i = 0; i < n-1; ++i) {
        let A = heap.pop();
        let B = heap.pop();
        let C = A+B;
        sum += C;
        heap.push(C);
    }
    output[t] = sum;
}
console.log(output.join('\n'));