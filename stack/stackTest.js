// testing the Stack class
const stack = new Stack();
stack.push(-10);
stack.push(20);
console.log('Popped: ' + stack.pop());
stack.push(5.6);
console.log('Stack currently: ' + stack.getStack());
console.log('Popped: ' + stack.pop());

console.log('Top of the stack: ' + stack.peek());
console.log('Is stack full?: ' + stack.isFull());
console.log('Is stack empty?: ' + stack.isEmpty());
console.log('Stack currently: ' + stack.getStack());

// testing for matching braces
console.log(checkMatchingBraces("(())()"));
console.log(checkMatchingBraces("((("));
console.log(checkMatchingBraces("))(("));
