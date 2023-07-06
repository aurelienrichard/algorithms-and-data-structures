import { MinHeap } from './MinHeap'

type Node<T> = {
	value: T
	priority: number
}

export class PriorityQueue<T> {
	private heap: MinHeap<Node<T>>

	constructor() {
		const comparator = (a: Node<T>, b: Node<T>) => {
			const aPriority = a?.priority
			const bPriority = b?.priority

			return aPriority - bPriority
		}

		this.heap = new MinHeap(comparator)
	}

	get length(): number {
		return this.heap.length
	}

	enqueue(value: T, priority: number): void {
		const node: Node<T> = { value, priority }

		this.heap.insert(node)
	}

	dequeue(): T | undefined {
		return this.heap.remove()?.value
	}

	peek(): T | undefined {
		return this.heap.peek()?.value
	}
}
