export class BinarySearchTree<T> {
	value: T
	left: BinarySearchTree<T> | null
	right: BinarySearchTree<T> | null
	private comparator: (a: T, b: T) => number

	constructor(item: T, comparator: (a: T, b: T) => number) {
		this.value = item
		this.left = null
		this.right = null
		this.comparator = comparator
	}

	insert(item: T): void {
		const compare = this.comparator(item, this.value)
		if (compare <= 0) {
			if (!this.left) this.left = new BinarySearchTree(item, this.comparator)
			else this.left.insert(item)
		} else if (!this.right) {
			this.right = new BinarySearchTree(item, this.comparator)
		} else {
			this.right.insert(item)
		}
	}

	includes(item: T): boolean {
		const compare = this.comparator(item, this.value)
		if (compare === 0) return true
		if (compare < 0 && this.left) return this.left.includes(item)
		if (compare > 0 && this.right) return this.right.includes(item)

		return false
	}

	remove(item: T): BinarySearchTree<T> | null {
		const compare = this.comparator(item, this.value)
		if (compare < 0 && this.left) {
			this.left = this.left.remove(item)
			return this
		}
		if (compare > 0 && this.right) {
			this.right = this.right.remove(item)
			return this
		}
		if (!this.left) return this.right
		if (!this.right) return this.left

		this.value = BinarySearchTree.getSuccessor(this.right)
		this.right = this.right.remove(this.value)

		return this
	}

	private static getSuccessor<T>(tree: BinarySearchTree<T>) {
		let min = tree.value
		let curr = tree.left

		while (curr) {
			min = curr.value
			curr = curr.left
		}

		return min
	}
}
