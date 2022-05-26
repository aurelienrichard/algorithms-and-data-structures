// TREEBREADTHFIRSTSEARCH

// Breadth First Search algorithm to visit every node of a binary tree

// import Binary Search Tree data structure
const BinarySearchTree = require('../../Data Structures/JavaScript/BinarySearchTree');
// import Queue data structure
const Queue = require('../../Data Structures/JavaScript/Queue');

const tree = new BinarySearchTree()
  .insert(9)
  .insert(12)
  .insert(3)
  .insert(75)
  .insert(-8)
  .insert(26)
  .insert(34);

const breadthFirstSearch = () => {
  const queue = new Queue();
  const nodes = [];
  queue.enqueue(tree.root);
  while (queue.first) {
    const node = queue.dequeue();
    nodes.push(node.value);
    if (node.left) queue.enqueue(node.left);
    if (node.right) queue.enqueue(node.right);
  }
  return nodes;
};

// TEST

console.log(breadthFirstSearch()); // [ 9,  3, 12, -8, 75, 26, 34 ]
