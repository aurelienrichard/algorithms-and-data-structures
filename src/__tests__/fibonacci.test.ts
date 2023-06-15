import { test, expect } from 'vitest'
import { fibonacci } from 'algorithms/fibonacci'

test('fibonacci', () => {
	expect(fibonacci(22)).toBe(10946)
	expect(fibonacci(31)).toBe(832040)
})
