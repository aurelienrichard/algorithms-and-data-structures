import type { LinkedList } from './LinkedList'

type Node<T> = {
	value: T
	next: Node<T> | null
}

export class SinglyLinkedList<T> implements LinkedList<T> {
	private head: Node<T> | null
	private tail: Node<T> | null
	length: number

	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	remove(index: number) {
		if (index < 0 || index >= this.length) return undefined
		if (index === 0) return this.removeFirst()
		if (index === this.length - 1) return this.removeLast()

		const [prev, curr] = this.getNodes(index) as Node<T>[]
		prev.next = curr.next

		this.length -= 1
		return curr.value
	}

	insert(item: T, index: number) {
		if (index > this.length) throw Error('Index out of bounds.')
		else if (index === 0) this.prepend(item)
		else if (index === this.length) this.append(item)
		else {
			const [prev] = this.getNodes(index) as Node<T>[]
			const node: Node<T> = { value: item, next: prev.next }

			prev.next = node
			this.length += 1
		}
	}

	append(item: T) {
		const node: Node<T> = { value: item, next: null }

		if (!this.tail) this.head = node
		else this.tail.next = node

		this.tail = node
		this.length += 1
	}

	prepend(item: T) {
		const node: Node<T> = { value: item, next: null }

		if (!this.tail) this.tail = node
		else node.next = this.head

		this.head = node
		this.length += 1
	}

	get(index: number) {
		const [, node] = this.getNodes(index)
		return node?.value
	}

	private getNodes(index: number): (Node<T> | null)[] {
		let prev = this.head
		let curr = this.head

		for (let i = 0; curr && i < index; i += 1) {
			prev = curr
			curr = curr.next
		}
		return [prev, curr]
	}

	private removeFirst() {
		if (this.length === 1) this.tail = null

		const curr = this.head as Node<T>
		this.head = curr.next
		this.length -= 1

		return curr.value
	}

	private removeLast() {
		const [prev, curr] = this.getNodes(this.length - 1) as Node<T>[]

		this.tail = prev
		this.tail.next = null

		this.length -= 1
		return curr.value
	}
}
