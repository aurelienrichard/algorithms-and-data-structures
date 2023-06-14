// QUICKSORT

// Quick Sort sorting algorithm O(n log n)

const swap = <T>(arr: T[], a: number, b: number) => {
	const tmp = arr[a]
	arr[a] = arr[b]
	arr[b] = tmp
}

const partition = (arr: number[], low: number, high: number) => {
	const pivot = arr[high]
	let idx = low - 1

	for (let i = low; i < high; i += 1) {
		if (arr[i] <= pivot) {
			idx += 1
			swap(arr, idx, i)
		}
	}
	idx += 1
	swap(arr, idx, high)

	return idx
}

export const quickSort = (arr: number[], low = 0, high = arr.length - 1) => {
	if (low >= high) return

	const pivotIdx = partition(arr, low, high)
	quickSort(arr, low, pivotIdx - 1)
	quickSort(arr, pivotIdx + 1, high)
}
