// SWAP

// Swap two array elements in place

export const swap = <T>(arr: T[], a: number, b: number) => {
	const tmp = arr[a]
	arr[a] = arr[b]
	arr[b] = tmp
}
