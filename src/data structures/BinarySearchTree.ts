export class BinarySearchTree {
	data: number
	left: BinarySearchTree | null
	right: BinarySearchTree | null

	constructor(data: number) {
		this.data = data
		this.left = null
		this.right = null
	}

	insert(value: number): void {
		if (value <= this.data) {
			if (!this.left) this.left = new BinarySearchTree(value)
			else this.left.insert(value)
		} else if (!this.right) {
			this.right = new BinarySearchTree(value)
		} else {
			this.right.insert(value)
		}
	}

	includes(value: number): boolean {
		if (value === this.data) return true
		if (value < this.data && this.left) return this.left.includes(value)
		if (value > this.data && this.right) return this.right.includes(value)

		return false
	}

	remove(value: number): BinarySearchTree | null {
		if (value < this.data && this.left) {
			this.left = this.left.remove(value)
			return this
		}
		if (value > this.data && this.right) {
			this.right = this.right.remove(value)
			return this
		}
		if (!this.left) return this.right
		if (!this.right) return this.left

		this.data = BinarySearchTree.getSuccessor(this.right)
		this.right = this.right.remove(this.data)

		return this
	}

	private static getSuccessor(tree: BinarySearchTree): number {
		let min = tree.data
		let curr = tree.left

		while (curr) {
			min = curr.data
			curr = curr.left
		}

		return min
	}
}
