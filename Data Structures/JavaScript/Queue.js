// QUEUE

// Queue implementation using a Linked List

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // add new item at the end of the queue
  enqueue(value) {
    const node = new Node(value);
    if (!this.first) this.first = node;
    else this.last.next = node;
    this.last = node;
    this.size += 1;

    return this.size;
  }
  // remove first item from the stack and return its value
  dequeue() {
    if (!this.first) return undefined;
    const { first } = this;
    this.size -= 1;
    if (this.size === 0) this.last = null;
    this.first = first.next;

    return first.value;
  }
}

module.exports = Queue;
