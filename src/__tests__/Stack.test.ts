import { test, expect } from 'vitest'
import { Stack } from '../data structures/Stack'

test('stack', () => {
	const stack = new Stack<number>()

	stack.push(5)
	stack.push(7)
	stack.push(9)
	expect(stack.peek()).toBe(9)
	expect(stack).toHaveLength(3)
	expect(stack.pop()).toBe(9)
	expect(stack.pop()).toBe(7)
	expect(stack.pop()).toBe(5)
	expect(stack.pop()).toBe(undefined)
	expect(stack).toHaveLength(0)
	stack.push(69)
	expect(stack.peek()).toBe(69)
	expect(stack).toHaveLength(1)
})
