// STACK

// Stack implementation using a Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.size = 0;
  }
  // add new item at the beginning of the stack
  push(value) {
    const node = new Node(value);
    node.next = this.first;
    this.first = node;
    this.size += 1;

    return this.size;
  }
  // remove first item from the stack and return its value
  pop() {
    if (!this.first) return undefined;
    const { first } = this;
    this.size -= 1;
    this.first = first.next;

    return first.value;
  }
}
