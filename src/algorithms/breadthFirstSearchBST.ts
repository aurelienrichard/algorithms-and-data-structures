// BREADTHFIRSTSEARCHBST

// Breadth First Search algorithm to visit every node of a binary tree

import { BinarySearchTree } from 'data structures/BinarySearchTree'
import { Queue } from 'data structures/Queue'

export const breadthFirstSearchBST = <T>(tree: BinarySearchTree<T>): T[] => {
	const nodes: T[] = []
	const queue = new Queue()
	queue.enqueue(tree)

	while (queue.length !== 0) {
		const node = queue.dequeue() as BinarySearchTree<T>
		nodes.push(node.value)

		if (node.left) queue.enqueue(node.left)
		if (node.right) queue.enqueue(node.right)
	}

	return nodes
}
