
/**
 * Check whether braces match or not; returns boolean
 * @param {String} str 
 * 
 * Algorithm:
 * 1. Push opening braces in the stack untill closing brace is encountered.
 * 2. Pop everytime a closing brace is encountered.
 * 3. Check whether stack is empty in the end.
 * 4. If empty, braces match.
 */
function checkMatchingBraces(str){
    let stack = new Stack();
    let matched = true;
    for(const elem of str){
        elem === "(" ? stack.push(elem) : stack.isEmpty() ? matched = false : stack.pop();
    }
    return matched && stack.isEmpty();
}