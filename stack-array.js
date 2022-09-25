console.log('Hello');
class Stack {
  #items;
  // array index 0 -> the base (or "the start" in array term)
  // array index length - 1 -> the top (or "the end" in array term)
  constructor() {
    this.items = [];
  }

  // add a new or several elements to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // remove item near the top of stack
  pop() {
    this.items.pop();
  }

  // return the lastest added item at the top of the stack, but not modify original stack
  peek() {
    return this.items[this.items.length - 1];
  }

  // verify whether the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // empty the whole stack
  clear() {
    this.items = [];
  }

  // return the stack size
  size() {
    return this.items.length;
  }
}

const stack = new Stack();
console.log(stack.isEmpty()); //	outputs	true
stack.push(5);
stack.push(8);
console.log(stack.peek()); //	outputs	8
stack.push(11);
console.log(stack.size()); //	outputs	3
console.log(stack.isEmpty()); //	outputs	false
