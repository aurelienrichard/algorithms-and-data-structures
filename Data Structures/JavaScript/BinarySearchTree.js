// BINARYSEARCHTREE

// Binary Search Tree implementation

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // insert new item in the tree and place it accordingly
  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let [previous, current] = [this.root, this.root];
    while (current) {
      previous = current;
      if (value < current.value) {
        current = current.left;
        if (!current) previous.left = node;
      } else if (value > current.value) {
        current = current.right;
        if (!current) previous.right = node;
      } else return undefined;
    }
    return this;
  }
  // return true or false based on whether given value exists within the tree
  includes(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else return true;
    }
    return false;
  }
}

module.exports = BinarySearchTree;
