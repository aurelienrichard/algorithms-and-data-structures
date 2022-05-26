// TREEDEPTHFIRSTSEARCH

// Depth First Search algorithm to visit every node of a binary tree

// import Binary Search Tree data structure
const BinarySearchTree = require('../../Data Structures/JavaScript/BinarySearchTree');

const tree = new BinarySearchTree()
  .insert(23)
  .insert(42)
  .insert(9)
  .insert(66)
  .insert(20)
  .insert(37);

const treeDepthFirstSearch = () => {
  const nodes = [];
  const traverse = (node) => {
    nodes.push(node.value);
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  };
  traverse(tree.root);
  return nodes;
};

// TEST

console.log(treeDepthFirstSearch()); // [ 23, 9, 20, 42, 37, 66 ]
