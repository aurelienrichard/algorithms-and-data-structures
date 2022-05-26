// SINGLYLINKEDLIST

// Singly Linked List implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // add new item at the end of the list
  push(value) {
    const node = new Node(value);
    if (!this.head) this.head = node;
    else this.tail.next = node;
    this.tail = node;
    this.length += 1;

    return this.length;
  }
  // remove last item from the list and return it
  pop() {
    if (!this.head) return undefined;
    let [current, previous] = [this.head, this.head];
    while (current.next) {
      previous = current;
      current = current.next;
    }
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = previous;
      this.tail.next = null;
    }
    return current;
  }
  // add new item at the beginning of the list
  unshift(value) {
    const node = new Node(value);
    if (!this.head) this.tail = node;
    else node.next = this.head;
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

    return current;
  }
  // return the item located at given index of the list
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let current = this.head;
    let counter = 0;
    while (counter !== index) {
      current = current.next;
      counter += 1;
    }
    return current;
  }
  // return true or false based on whether given value exists within the list
  has(value) {
    let current = this.head;
    while (current) {
      if (value === current.value) return true;
      current = current.next;
    }
    return false;
  }
  // set given value on item located at given index
  set(value, index) {
    const node = this.get(index);
    if (!node) return undefined;
    node.value = value;

    return this;
  }
  // add new item at given index of the list
  insert(value, index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const node = new Node(value);
    const previous = this.get(index - 1);
    node.next = previous.next;
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
    node.next = null;
    this.length -= 1;

    return node;
  }
  // print the list values in an array
  print() {
    const values = [];
    for (let node = this.head; node; node = node.next) {
      values.push(node.value);
    }
    return values;
  }
}

module.exports = SinglyLinkedList;
