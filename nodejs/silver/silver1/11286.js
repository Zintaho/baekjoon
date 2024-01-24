let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;

class Heap {
    constructor() {
        this.heap = [];
    }

    _parent(a) {
        if (a === 0) return 0;
        return Math.floor((a-1) / 2);
    }

    _getTargetChild(a) {
        let [l, r] = [a*2 + 1, a*2 + 2];
        if (l >= this.heap.length) return a;
        else if (r >= this.heap.length) return l;

        return this._check(l, r)?l:r;
    }

    _check(a, b) {
        if (a === b) return false;

        let [A, B] = [this.heap[a], this.heap[b]];
        if (Math.abs(A) < Math.abs(B)) return true;
        else if (Math.abs(A) === Math.abs(B)) {
            if (A < B) return true;
            else return false;
        } else return false;
    }

    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    _heapifyUp() {
        let a = this.heap.length - 1;
        while (this._check(a, this._parent(a))) {
            this._swap(a, this._parent(a));
            a = this._parent(a);
        }
    }

    _heapifyDown() {
        let a = 0;
        while (this._check(this._getTargetChild(a), a)) {
            let b = this._getTargetChild(a);
            this._swap(a, b);
            a = b;
        }
    }

    push(el) {
        this.heap.push(el);

        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 0) return 0;
        if (this.heap.length === 1) return this.heap.pop();
        this._swap(this.heap.length - 1, 0);
        let out = this.heap.pop();

        this._heapifyDown();

        return out;
    }
}

const heap = new Heap();
const output = [];
input.forEach((x, n) => {
    x = Number(x);

    if (x === 0) output.push(heap.pop());
    else heap.push(x);
});

console.log(output.join('\n'));