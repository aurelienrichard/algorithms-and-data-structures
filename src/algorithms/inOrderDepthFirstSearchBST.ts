import type { BinarySearchTree } from 'data structures/BinarySearchTree'

export const inOrderDepthFirstSearchBST = <T>(tree: BinarySearchTree<T>) => {
	const nodes: T[] = []
	const traverse = (node: BinarySearchTree<T>) => {
		if (node.left) traverse(node.left)
		nodes.push(node.data)
		if (node.right) traverse(node.right)
	}
	traverse(tree)
	return nodes
}
