const swap = (arr: number[], a: number, b: number) => {
	const tmp = arr[a]
	arr[a] = arr[b]
	arr[b] = tmp
}

export class MinHeap {
	private data: number[]

	constructor() {
		this.data = []
	}

	get length() {
		return this.data.length
	}

	insert(value: number) {
		this.data.push(value)
		this.heapifyUp(this.length - 1)
	}

	remove() {
		if (this.length === 0) return undefined

		const out = this.data[0]
		const last = this.data.pop() as number

		if (this.length === 0) return last

		this.data[0] = last
		this.heapifyDown(0)

		return out
	}

	private heapifyUp(index: number) {
		if (index === 0) return

		const parentIndex = MinHeap.getParentIndex(index)

		if (this.data[index] < this.data[parentIndex]) {
			swap(this.data, index, parentIndex)
			this.heapifyUp(parentIndex)
		}
	}

	private heapifyDown(index: number) {
		const leftChildIndex = MinHeap.getLeftChildIndex(index)
		const rightChildIndex = MinHeap.getRightChildIndex(index)

		if (leftChildIndex >= this.length) return

		const leftChild = this.data[leftChildIndex]
		const rightChild = this.data[rightChildIndex]
		let min = index

		if (leftChild < this.data[min]) min = leftChildIndex
		if (rightChild < this.data[min]) min = rightChildIndex
		if (min !== index) {
			swap(this.data, index, min)
			this.heapifyDown(min)
		}
	}

	private static getParentIndex(index: number) {
		return Math.floor((index - 1) / 2)
	}

	private static getLeftChildIndex(index: number) {
		return index * 2 + 1
	}

	private static getRightChildIndex(index: number) {
		return index * 2 + 2
	}
}
