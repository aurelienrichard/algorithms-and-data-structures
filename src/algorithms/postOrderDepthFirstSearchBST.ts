// POSTORDERDEPTHFIRSTSEARCHBST

// Depth First Search algorithm to visit every node of a binary tree post order

import type { BinarySearchTree } from 'data structures/BinarySearchTree'

export const postOrderDepthFirstSearchBST = <T>(tree: BinarySearchTree<T>) => {
	const nodes: T[] = []
	const traverse = (node: BinarySearchTree<T>) => {
		if (node.left) traverse(node.left)
		if (node.right) traverse(node.right)
		nodes.push(node.data)
	}
	traverse(tree)

	return nodes
}
