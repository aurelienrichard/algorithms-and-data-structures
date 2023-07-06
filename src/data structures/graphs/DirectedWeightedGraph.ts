import type { Graph } from './Graph'

type Edge<T> = {
	to: T
	weight: number
}

export class DirectedWeightedGraph<T> implements Graph<T, Edge<T>> {
	adjacencyList: Map<T, Edge<T>[]>

	constructor() {
		this.adjacencyList = new Map()
	}

	addVertex(vertex: T): void {
		if (this.hasVertex(vertex)) return

		this.adjacencyList.set(vertex, [])
	}

	removeVertex(vertex: T): void {
		if (!this.hasVertex(vertex)) return

		this.adjacencyList.delete(vertex)
		this.adjacencyList.forEach((_, source) => {
			this.removeEdge(source, vertex)
		})
	}

	hasVertex(vertex: T): boolean {
		return this.adjacencyList.has(vertex)
	}

	addEdge(source: T, destination: T, weight: number): void {
		if (!this.areValidVertices(source, destination)) return
		if (!this.hasEdge(source, destination)) {
			const edges = this.adjacencyList.get(source) as Edge<T>[]
			const edge: Edge<T> = { to: destination, weight }

			edges.push(edge)
		}
	}

	removeEdge(source: T, destination: T): void {
		if (!this.areValidVertices(source, destination)) return
		if (this.hasEdge(source, destination)) {
			const edges = this.adjacencyList.get(source) as Edge<T>[]
			const filtered = edges.filter((edge) => edge.to !== destination)

			this.adjacencyList.set(source, filtered)
		}
	}

	hasEdge(source: T, destination: T): boolean {
		const edges = this.adjacencyList.get(source)

		return !!edges?.some((edge) => edge.to === destination)
	}

	private areValidVertices(source: T, destination: T) {
		return source !== destination && this.hasVertex(source) && this.hasVertex(destination)
	}
}
