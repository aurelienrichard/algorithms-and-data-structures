const swap = <T>(arr: T[], a: number, b: number) => {
	const tmp = arr[a]
	arr[a] = arr[b]
	arr[b] = tmp
}

type Node<T> = {
	value: T
	priority: number
}

export class PriorityQueue<T> {
	private data: Node<T>[]

	constructor() {
		this.data = []
	}

	get length(): number {
		return this.data.length
	}

	enqueue(value: T, priority: number): void {
		const node: Node<T> = { value, priority }

		this.data.push(node)
		this.heapifyUp(this.length - 1)
	}

	dequeue(): T | undefined {
		if (this.length === 0) return undefined

		const out = this.data[0]
		const last = this.data.pop() as Node<T>

		if (this.length === 0) return last.value

		this.data[0] = last
		this.heapifyDown(0)

		return out.value
	}

	peek(): T | undefined {
		return this.data[0]?.value
	}

	private heapifyUp(index: number) {
		if (index === 0) return

		const parentIndex = PriorityQueue.getParentIndex(index)

		if (this.data[index].priority < this.data[parentIndex].priority) {
			swap(this.data, index, parentIndex)
			this.heapifyUp(parentIndex)
		}
	}

	private heapifyDown(index: number) {
		const leftChildIndex = PriorityQueue.getLeftChildIndex(index)
		const rightChildIndex = PriorityQueue.getRightChildIndex(index)
		const leftChild = this.data[leftChildIndex]
		const rightChild = this.data[rightChildIndex]
		let min = index

		if (leftChild?.priority < this.data[min]?.priority) min = leftChildIndex
		if (rightChild?.priority < this.data[min]?.priority) min = rightChildIndex
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
