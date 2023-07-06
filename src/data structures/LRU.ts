type Node<T> = {
	value: T
	prev: Node<T> | null
	next: Node<T> | null
}

export class LRU<K, V> {
	private head: Node<V> | null
	private tail: Node<V> | null
	private lookup: Map<K, Node<V>>
	private reverseLookup: WeakMap<Node<V>, K>
	private capacity: number
	private length: number

	constructor(capacity: number) {
		this.head = null
		this.tail = null
		this.lookup = new Map()
		this.reverseLookup = new WeakMap()
		this.capacity = capacity
		this.length = 0
	}

	set(key: K, value: V): void {
		if (!this.lookup.has(key)) {
			const node: Node<V> = { value, prev: null, next: null }

			this.length += 1
			this.prependNode(node)
			this.trim()
			this.lookup.set(key, node)
			this.reverseLookup.set(node, key)
		} else {
			const node = this.lookup.get(key) as Node<V>

			this.detachNode(node)
			this.prependNode(node)
			node.value = value
		}
	}

	get(key: K): V | undefined {
		if (!this.lookup.has(key)) return undefined

		const node = this.lookup.get(key) as Node<V>

		this.detachNode(node)
		this.prependNode(node)

		return node.value
	}

	private detachNode(node: Node<V>) {
		if (node.prev) node.prev.next = node.next
		if (node.next) node.next.prev = node.prev
		if (this.head === node) this.head = this.head.next
		if (this.tail === node) this.tail = this.tail.prev

		node.next = null
		node.prev = null
	}

	private prependNode(node: Node<V>) {
		if (!this.head) {
			this.head = node
			this.tail = node
		} else {
			node.next = this.head
			this.head.prev = node
			this.head = node
		}
	}

	private trim() {
		if (this.length <= this.capacity) return

		const tail = this.tail as Node<V>

		this.detachNode(tail)
		this.length -= 1

		const key = this.reverseLookup.get(tail) as K

		this.lookup.delete(key)
		this.reverseLookup.delete(tail)
	}
}
