import { test, expect } from 'vitest'
import { Queue } from '../data structures/Queue'

test('queue', () => {
	const queue = new Queue<number>()

	queue.enqueue(5)
	queue.enqueue(7)
	queue.enqueue(9)
	expect(queue.peek()).toBe(5)
	expect(queue.length).toBe(3)
	expect(queue.dequeue()).toBe(5)
	expect(queue.dequeue()).toBe(7)
	expect(queue.dequeue()).toBe(9)
	expect(queue.dequeue()).toBe(undefined)
	expect(queue.length).toBe(0)
	queue.enqueue(69)
	expect(queue.peek()).toBe(69)
	expect(queue.length).toBe(1)
})
