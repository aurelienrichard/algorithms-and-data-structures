export class Trie {
	private isWord: boolean
	private children: Map<string, Trie>

	constructor() {
		this.isWord = false
		this.children = new Map()
	}

	insert(str: string) {
		if (str.length === 0) {
			this.isWord = true
			return
		}

		const [char] = str

		if (!this.children.has(char)) this.children.set(char, new Trie())

		const trie = this.children.get(char) as Trie

		trie.insert(str.slice(1))
	}

	remove(str: string) {
		const node = this.getNode(str)

		if (!node) return

		if (node.children.size === 0) {
			const char = str.slice(-1)
			const rest = str.slice(0, -1)
			const parent = this.getNode(rest) as Trie

			parent.children.delete(char)
			this.remove(rest)
		} else {
			node.isWord = false
		}
	}

	search(str: string) {
		const words: string[] = []
		const node = this.getNode(str)

		if (!node) return words

		const traverse = (trie: Trie, word: string) => {
			if (trie.isWord) {
				words.push(word)
			}

			trie.children.forEach((child: Trie, char: string) => {
				traverse(child, word + char)
			})
		}

		traverse(node, str)

		return words
	}

	private getNode(str: string): Trie | undefined {
		if (str.length === 0) return this

		const [char] = str

		if (this.children.has(char)) {
			const node = this.children.get(char) as Trie

			return node.getNode(str.slice(1))
		}

		return undefined
	}
}
