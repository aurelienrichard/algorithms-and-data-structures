export interface LinkedList<T> {
	get length(): number
	remove(index: number): T | undefined
	removeFirst(): T | undefined
	removeLast(): T | undefined
	insert(item: T, index: number): void
	append(item: T): void
	prepend(item: T): void
	get(index: number): T | undefined
}
