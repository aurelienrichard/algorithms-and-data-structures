import type { LinkedList } from './LinkedList'

type Node<T> = {
	value: T
	prev: Node<T> | null
	next: Node<T> | null
}

export class DoublyLinkedList<T> implements LinkedList<T> {
	private head: Node<T> | null
	private tail: Node<T> | null
	public length: number

	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	remove(index: number): T | undefined {
		if (index >= this.length) return undefined
		if (index === 0) return this.removeFirst()
		if (index === this.length - 1) return this.removeLast()

		const curr = this.getNode(index) as Node<T>
		const { prev, next } = curr as { prev: Node<T>; next: Node<T> }

		prev.next = next
		next.prev = prev

		this.length -= 1
		return curr.value
	}

	removeFirst(): T | undefined {
		if (!this.head) return undefined
		const curr = this.head

		if (this.length === 1) {
			this.tail = null
			this.head = null
		} else this.head.prev = null

		this.length -= 1
		return curr.value
	}

	removeLast(): T | undefined {
		if (!this.tail) return undefined
		const curr = this.tail

		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.tail = curr.prev as Node<T>
			this.tail.next = null
		}

		this.length -= 1
		return curr.value
	}

	insert(item: T, index: number) {
		if (index > this.length) throw new Error('index out of bounds')
		else if (index === 0) this.prepend(item)
		else if (index === this.length) this.append(item)
		else {
			const prev = this.getNode(index - 1) as Node<T>
			const { next } = prev as { next: Node<T> }
			const node: Node<T> = { value: item, prev, next }

			prev.next = node
			this.length += 1
		}
	}

	append(item: T) {
		const node: Node<T> = { value: item, prev: null, next: null }

		if (!this.tail) this.head = node
		else {
			this.tail.next = node
			node.prev = this.tail
		}

		this.tail = node
		this.length += 1
	}

	prepend(item: T) {
		const node: Node<T> = { value: item, prev: null, next: null }

		if (!this.head) this.tail = node
		else {
			this.head.prev = node
			node.next = this.head
		}

		this.head = node
		this.length += 1
	}

	get(index: number): T | undefined {
		const node = this.getNode(index)
		return node?.value
	}

	private getNode(index: number): Node<T> | null {
		let curr = this.head

		for (let i = 0; curr && i < index; i += 1) {
			curr = curr.next
		}
		return curr
	}
}
