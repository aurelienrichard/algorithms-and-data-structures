export class BinarySearchTree<T> {
	data: T
	left: BinarySearchTree<T> | null
	right: BinarySearchTree<T> | null

	constructor(data: T) {
		this.data = data
		this.left = null
		this.right = null
	}

	insert(item: T) {
		if (item <= this.data) {
			if (!this.left) this.left = new BinarySearchTree(item)
			else this.left.insert(item)
		} else if (!this.right) {
			this.right = new BinarySearchTree(item)
		} else {
			this.right.insert(item)
		}
	}

	includes(item: T): boolean {
		if (item === this.data) return true
		if (item < this.data && this.left) return this.left.includes(item)
		if (item > this.data && this.right) return this.right.includes(item)

		return false
	}

	remove(item: T): BinarySearchTree<T> | null {
		if (item < this.data && this.left) {
			this.left = this.left.remove(item)
			return this
		}
		if (item > this.data && this.right) {
			this.right = this.right.remove(item)
			return this
		}
		if (!this.left) return this.right
		if (!this.right) return this.left

		this.data = BinarySearchTree.getSuccessor(this.right)
		this.right = this.right.remove(this.data)

		return this
	}

	private static getSuccessor<T>(tree: BinarySearchTree<T>) {
		let min = tree.data
		let curr = tree.left

		while (curr) {
			min = curr.data
			curr = curr.left
		}

		return min
	}
}
