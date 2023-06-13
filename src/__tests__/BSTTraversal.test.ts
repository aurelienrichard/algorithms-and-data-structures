import { test, expect, describe } from 'vitest'
import { BinarySearchTree } from 'data structures/BinarySearchTree'
import { preOrderDepthFirstSearchBST } from 'algorithms/preOrderDepthFirstSearchBST'
import { inOrderDepthFirstSearchBST } from 'algorithms/inOrderDepthFirstSearchBST'
import { postOrderDepthFirstSearchBST } from 'algorithms/postOrderDepthFirstSearchBST'
import { breadthFirstSearchBST } from 'algorithms/breadthFirstSearchBST'

const tree = new BinarySearchTree(20)
tree.insert(50)
tree.insert(100)
tree.insert(30)
tree.insert(45)
tree.insert(29)
tree.insert(10)
tree.insert(15)
tree.insert(5)
tree.insert(7)
tree.insert(68)

describe('depth first search binary search tree', () => {
	test('pre order', () => {
		expect(preOrderDepthFirstSearchBST(tree)).toEqual([
			20, 10, 5, 7, 15, 50, 30, 29, 45, 100, 68
		])
	})

	test('in order', () => {
		expect(inOrderDepthFirstSearchBST(tree)).toEqual([
			5, 7, 10, 15, 20, 29, 30, 45, 50, 68, 100
		])
	})

	test('post order', () => {
		expect(postOrderDepthFirstSearchBST(tree)).toEqual([
			7, 5, 15, 10, 29, 45, 30, 68, 100, 50, 20
		])
	})
})

test('breadth first search binary search tree', () => {
	expect(breadthFirstSearchBST(tree)).toEqual([20, 10, 50, 5, 15, 30, 100, 7, 29, 45, 68])
})
