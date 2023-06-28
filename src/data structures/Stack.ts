type Node<T> = {
	value: T
	next: Node<T> | null
}

export class Stack<T> {
	private head: Node<T> | null
	public length: number

	constructor() {
		this.head = null
		this.length = 0
	}

	push(item: T): void {
		const node: Node<T> = { value: item, next: this.head }

		this.head = node
		this.length += 1
	}

	pop(): T | undefined {
		if (!this.head) return undefined

		const { head } = this
		this.head = head.next
		this.length -= 1

		return head.value
	}

	peek(): T | undefined {
		return this.head?.value
	}
}
