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
}
