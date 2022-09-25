// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
const fruits = ['Apple', 'Banana', 'Watermelon', 'Orange'];

const person = { fname: 'John', lname: 'Doe', age: 25 };

class Stack {
  #items;
  #counts
  // array index 0 -> the base (or "the start" in array term)
  // array index length - 1 -> the top (or "the end" in array term)
  constructor() {
    this.counts = 0;
    this.items = {};
  }

  // add a new or several elements to the top of the stack
  // To	add	an element to	the stack, we	will use the count variable	as the key of	the	items	object and	the	element will	be	its	value
  push(element) {
    this.items[this.counts] = element;
    this.counts++;
  }

  // remove item near the top of stack
  pop() {
    // this.element.pop();
    if(this.isEmpty()) {
      return undefined
    }
    this.counts--;
    const result = this.items[this.counts]
    delete this.items[this.counts]
    return result;
  }

  // return the lastest added item at the top of the stack, but not modify original stack
  peek() {
    if(this.isEmpty()) {
      return undefined;
    }
    return this.items[this.counts - 1];
  }

  // verify whether the stack is empty
  isEmpty() {
    return this.counts === 0;
  }

  // empty the whole stack
  clear() {
    this.items = {};
    this.counts = 0

    // while(!this.isEmpty()) {
    //  this.pop()
    //}
  }

  // return the stack size
  size() {
    return this.counts;
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
