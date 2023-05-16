// BUBBLESORT

// Bubble Sort sorting algorithm O(n²)

import { swap } from './swap'

export const bubbleSort = (arr: number[]) => {
	for (let i = 0; i < arr.length; i += 1) {
		for (let j = 0; j < arr.length - i - 1; j += 1) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1)
			}
		}
	}
	return arr
}
