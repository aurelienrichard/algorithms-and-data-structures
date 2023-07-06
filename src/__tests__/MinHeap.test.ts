import { test, expect } from 'vitest'
import { MinHeap } from 'data structures/MinHeap'

test('min heap', () => {
	const comparator = (a: number, b: number) => a - b
	const heap = new MinHeap<number>(comparator)

	expect(heap).toHaveLength(0)
	expect(heap.remove()).toBe(undefined)
	heap.insert(5)
	heap.insert(3)
	heap.insert(69)
	heap.insert(420)
	heap.insert(4)
	heap.insert(1)
	heap.insert(8)
	heap.insert(7)
	expect(heap).toHaveLength(8)
	expect(heap.peek()).toBe(1)
	expect(heap.remove()).toBe(1)
	expect(heap.remove()).toBe(3)
	expect(heap.remove()).toBe(4)
	expect(heap.remove()).toBe(5)
	expect(heap).toHaveLength(4)
	expect(heap.remove()).toBe(7)
	expect(heap.remove()).toBe(8)
	expect(heap.remove()).toBe(69)
	expect(heap.remove()).toBe(420)
	expect(heap).toHaveLength(0)
})
