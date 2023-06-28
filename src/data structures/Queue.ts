type Node<T> = {
	value: T
	next: Node<T> | null
}

export class Queue<T> {
	private head: Node<T> | null
	private tail: Node<T> | null
	public length: number

	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	enqueue(item: T): void {
		const node: Node<T> = { value: item, next: null }

		if (!this.tail) this.head = node
		else this.tail.next = node

		this.tail = node
		this.length += 1
	}

	dequeue(): T | undefined {
		if (!this.head) return undefined
		if (this.length === 1) this.tail = null

		const { head } = this
		this.head = head.next
		this.length -= 1

		return head.value
	}

	peek(): T | undefined {
		return this.head?.value
	}
}
