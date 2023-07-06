export interface Graph<T1, T2> {
	adjacencyList: Map<T1, T2[]>
	addVertex(vertex: T1): void
	removeVertex(vertex: T1): void
	hasVertex(vertex: T1): boolean
	addEdge(source: T1, destination: T1, weight?: number): void
	removeEdge(source: T1, destination: T1): void
	hasEdge(source: T1, destination: T1): boolean
}
