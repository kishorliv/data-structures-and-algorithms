/**
 * Array based implementation of stack data structure
 */


class Stack {
    constructor() {
        this.stack = [];
        this.MAX_SIZE = 100;
        this.topIndex = -1;
    }

    // check if the stack is full; returns boolean
    isFull = () => {
        return this.topIndex >= this.MAX_SIZE;
    };

    // check if stack is empty; returns boolean
    isEmpty = () => {
        return this.topIndex < 0;
    };

    // insert operation
    push = (item) => {
        if (this.isFull()) {
            throw 'Stack is full!';
        }
        this.stack[++this.topIndex] = item;
    };

    // delete operation; returns popped item
    pop = () => {
        if (this.isEmpty()) {
            throw 'Stack is empty!';
        }
        let item = this.stack[this.topIndex];
        this.stack.splice(this.topIndex, this.topIndex == 0 ? 1 : this.topIndex);
        --this.topIndex;
        return item;
    };

    // returns stack array
    getStack = () => {
        return this.stack;
    };

    // returns top element in stack
    peek = () => {
        return this.stack[this.topIndex];
    };
}

