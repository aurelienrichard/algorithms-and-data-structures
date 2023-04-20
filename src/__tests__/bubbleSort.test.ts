import { test, expect } from 'vitest'
import { bubbleSort } from '../algorithms/bubbleSort'

test('bubble sort array', () => {
	const arr = [234, 43, 55, 63, 5, 6, 235, 547]

	expect(bubbleSort(arr)).toEqual([5, 6, 43, 55, 63, 234, 235, 547])
})
