// DOUBLYLINKEDLIST

// Doubly Linked List implementation

class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // add new item at the end of the list
  push(value) {
    const node = new Node(value);
    if (!this.head) this.head = node;
    else {
      this.tail.next = node;
      node.previous = this.tail;
    }
    this.tail = node;
    this.length += 1;

    return this.length;
  }
  // remove last item from the list and return it
  pop() {
    if (!this.head) return undefined;
    const current = this.tail;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = current.previous;
      this.tail.next = null;
      current.previous = null;
    }
    return current;
  }
  // add new item at the beginning of the list
  unshift(value) {
    const node = new Node(value);
    if (!this.head) this.tail = node;
    else {
      this.head.previous = node;
      node.next = this.head;
    }
    this.head = node;
    this.length += 1;

    return this.length;
  }
  // remove first item from the list and return it
  shift() {
    if (!this.head) return undefined;
    const current = this.head;
    this.length -= 1;
    if (this.length === 0) this.tail = null;
    this.head = current.next;
    this.head.previous = null;
    current.next = null;

    return current;
  }
  // return the item located at given index of the list
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current;
    let counter;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter += 1;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.previous;
        counter -= 1;
      }
    }
    return current;
  }
  // return true or false based on whether given value exists within the list
  has(value) {
    let [left, right] = [this.head, this.tail];
    do {
      if (value === left.value) return true;
      if (value === right.value) return true;
      left = left.next;
      right = right.previous;
    } while (left !== right);
    return false;
  }
  // set given value on item located at given index
  set(value, index) {
    const node = this.get(index);
    if (!node) return false;
    node.value = value;

    return true;
  }
  // add new item at given index of the list
  insert(value, index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const node = new Node(value);
    const previous = this.get(index - 1);
    node.next = previous.next;
    node.previous = previous;
    previous.next = node;
    this.length += 1;

    return this.length;
  }
  // remove item at given index of the list and return it
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previous = this.get(index - 1);
    const node = previous.next;
    previous.next = node.next;
    node.next.previous = previous;
    node.next = null;
    node.previous = null;
    this.length -= 1;

    return node;
  }
}
