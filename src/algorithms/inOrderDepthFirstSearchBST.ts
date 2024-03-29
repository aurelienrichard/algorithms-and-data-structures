// INORDERDEPTHFIRSTSEARCHBST

// Depth First Search algorithm to visit every node of a binary tree in order

import type { BinarySearchTree } from 'data structures/BinarySearchTree'

export const inOrderDepthFirstSearchBST = <T>(tree: BinarySearchTree<T>): T[] => {
	const nodes: T[] = []
	const traverse = (node: BinarySearchTree<T>) => {
		if (node.left) traverse(node.left)
		nodes.push(node.value)
		if (node.right) traverse(node.right)
	}

	traverse(tree)

	return nodes
}
