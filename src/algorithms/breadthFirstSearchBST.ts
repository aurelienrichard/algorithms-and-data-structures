// BREADTHFIRSTSEARCHBST

// Breadth First Search algorithm to visit every node of a binary tree

import { BinarySearchTree } from 'data structures/BinarySearchTree'
import { Queue } from 'data structures/Queue'

export const breadthFirstSearchBST = (tree: BinarySearchTree): number[] => {
	const nodes: number[] = []
	const queue = new Queue()
	queue.enqueue(tree)

	while (queue.length) {
		const node = queue.dequeue() as BinarySearchTree
		nodes.push(node.data)

		if (node.left) queue.enqueue(node.left)
		if (node.right) queue.enqueue(node.right)
	}

	return nodes
}
