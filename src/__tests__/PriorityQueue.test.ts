import { test, expect } from 'vitest'
import { PriorityQueue } from 'data structures/PriorityQueue'

test('priority queue', () => {
	const queue = new PriorityQueue<string>()

	expect(queue).toHaveLength(0)
	expect(queue.dequeue()).toBe(undefined)
	queue.enqueue('A', 5)
	queue.enqueue('B', 3)
	queue.enqueue('C', 4)
	queue.enqueue('D', 1)
	queue.enqueue('E', 8)
	queue.enqueue('F', 7)
	expect(queue).toHaveLength(6)
	expect(queue.peek()).toBe('D')
	expect(queue.dequeue()).toBe('D')
	expect(queue.dequeue()).toBe('B')
	expect(queue.dequeue()).toBe('C')
	expect(queue).toHaveLength(3)
	expect(queue.dequeue()).toBe('A')
	expect(queue.dequeue()).toBe('F')
	expect(queue.dequeue()).toBe('E')
	expect(queue).toHaveLength(0)
})
