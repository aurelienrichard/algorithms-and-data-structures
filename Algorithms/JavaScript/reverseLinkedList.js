// REVERSELINKEDLIST

// Reverse Linked List algorithm

// import Singly Linked List data structure
const SinglyLinkedList = require('../../Data Structures/JavaScript/SinglyLinkedList');

const singlyLinkedlist = new SinglyLinkedList();

singlyLinkedlist.push(4);
singlyLinkedlist.push(10);
singlyLinkedlist.push(39);
singlyLinkedlist.push(7);
singlyLinkedlist.push(61);
singlyLinkedlist.push(24);

const reverseLinkedList = (list) => {
  let node = list.head;
  list.head = list.tail;
  list.tail = node;
  let [previous, next] = [null, null];
  while (node) {
    next = node.next;
    node.next = previous;
    previous = node;
    node = next;
  }
  return list;
};

// TEST

console.log(singlyLinkedlist.print()); // [ 4, 10, 39, 7, 61, 24 ]
reverseLinkedList(singlyLinkedlist);
console.log(singlyLinkedlist.print()); // [ 24, 61, 7, 39, 10, 4 ]
