// PREORDERDEPTHFIRSTSEARCHBST

// Depth First Search algorithm to visit every node of a binary tree pre order

import type { BinarySearchTree } from 'data structures/BinarySearchTree'

export const preOrderDepthFirstSearchBST = (tree: BinarySearchTree) => {
	const nodes: number[] = []
	const traverse = (node: BinarySearchTree) => {
		nodes.push(node.data)
		if (node.left) traverse(node.left)
		if (node.right) traverse(node.right)
	}

	traverse(tree)

	return nodes
}
