// BUBBLESORT

// Bubble Sort sorting algorithm O(n²)

export const bubbleSort = (arr: number[]): number[] => {
	for (let i = 0; i < arr.length; i += 1) {
		for (let j = 0; j < arr.length - i - 1; j += 1) {
			const left = arr[j]
			const right = arr[j + 1]

			if (left > right) {
				arr.splice(j, 2, right, left)
			}
		}
	}

	return arr
}
