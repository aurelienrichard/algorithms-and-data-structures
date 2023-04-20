import { test, expect } from 'vitest'
import { binarySearch } from '../algorithms/binarySearch'

test('binary search sorted array', () => {
	const sortedArr1 = [1, 2, 3, 4, 5]
	const sortedArr2 = [5, 6, 10, 13, 14, 18, 30, 34, 35, 40, 44, 64, 79, 84, 86, 95, 96, 98]

	expect(binarySearch(sortedArr1, 2)).toBe(1)
	expect(binarySearch(sortedArr1, 3)).toBe(2)
	expect(binarySearch(sortedArr1, 5)).toBe(4)
	expect(binarySearch(sortedArr1, 6)).toBe(-1)
	expect(binarySearch(sortedArr2, 64)).toBe(11)
})
