// INORDERDEPTHFIRSTSEARCHBST

// Depth First Search algorithm to visit every node of a binary tree in order

import type { BinarySearchTree } from 'data structures/BinarySearchTree'

export const inOrderDepthFirstSearchBST = (tree: BinarySearchTree): number[] => {
	const nodes: number[] = []
	const traverse = (node: BinarySearchTree) => {
		if (node.left) traverse(node.left)
		nodes.push(node.data)
		if (node.right) traverse(node.right)
	}

	traverse(tree)

	return nodes
}
