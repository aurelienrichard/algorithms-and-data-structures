const swap = <T>(arr: T[], a: number, b: number) => {
	const tmp = arr[a]
	arr[a] = arr[b]
	arr[b] = tmp
}

export class MinHeap<T> {
	private data: T[]
	private comparator: (a: T, b: T) => number

	constructor(comparator: (a: T, b: T) => number) {
		this.data = []
		this.comparator = comparator
	}

	get length(): number {
		return this.data.length
	}

	insert(item: T): void {
		this.data.push(item)
		this.heapifyUp(this.length - 1)
	}

	remove(): T | undefined {
		if (this.length === 0) return undefined

		const out = this.data[0]
		const last = this.data.pop() as T

		if (this.length === 0) return last

		this.data[0] = last
		this.heapifyDown(0)

		return out
	}

	peek(): T | undefined {
		return this.data[0]
	}

	private heapifyUp(index: number): void {
		if (index === 0) return

		const item = this.data[index]
		const parentIndex = MinHeap.getParentIndex(index)
		const parent = this.data[parentIndex]

		if (this.comparator(item, parent) < 0) {
			swap(this.data, index, parentIndex)
			this.heapifyUp(parentIndex)
		}
	}

	private heapifyDown(index: number): void {
		const leftChildIndex = MinHeap.getLeftChildIndex(index)
		const rightChildIndex = MinHeap.getRightChildIndex(index)
		const leftChild = this.data[leftChildIndex]
		const rightChild = this.data[rightChildIndex]
		let min = index

		if (this.comparator(leftChild, this.data[min]) < 0) {
			min = leftChildIndex
		}
		if (this.comparator(rightChild, this.data[min]) < 0) {
			min = rightChildIndex
		}
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
