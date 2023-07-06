export interface LinkedList<T> {
	length: number
	insert(item: T, index: number): void
	remove(index: number): T | undefined
	append(item: T): void
	prepend(item: T): void
	get(index: number): T | undefined
}
