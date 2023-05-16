// BINARYSEARCH

// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise return -1.

export const binarySearch = (sortedArr: number[], targetValue: number) => {
	let low = 0
	let high = sortedArr.length

	while (low < high) {
		const mid = Math.floor(low + (high - low) / 2)
		const value = sortedArr[mid]

		if (value === targetValue) return mid
		if (value > targetValue) high = mid
		else low = mid + 1
	}
	return -1
}
