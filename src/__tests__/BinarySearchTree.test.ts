import { test, expect } from 'vitest'
import { BinarySearchTree } from 'data structures/BinarySearchTree'

test('binary search tree', () => {
	const tree = new BinarySearchTree(12)
	tree.remove(12)
	expect(tree.includes(12)).toBeTruthy()
	tree.insert(24)
	tree.insert(21)
	tree.insert(52)
	tree.insert(33)
	tree.insert(10)
	tree.remove(12)
	expect(tree.includes(12)).toBeFalsy()
	tree.remove(52)
	expect(tree.includes(52)).toBeFalsy()
	tree.remove(10)
	expect(tree.includes(10)).toBeFalsy()
})
