type Edge = {
	to: string
	weight: number
}

export class Graph {
	private adjacencyList: Map<string, Edge[]>

	constructor() {
		this.adjacencyList = new Map()
	}

	addVertex(vertex: string): void {
		if (this.hasVertex(vertex)) return

		this.adjacencyList.set(vertex, [])
	}

	removeVertex(vertex: string): void {
		if (!this.hasVertex(vertex)) return

		this.adjacencyList.delete(vertex)
		this.adjacencyList.forEach((_, source) => {
			this.removeEdge(source, vertex)
		})
	}

	hasVertex(vertex: string): boolean {
		return this.adjacencyList.has(vertex)
	}

	addEdge(source: string, destination: string, weight: number): void {
		if (!this.areValidVertices(source, destination)) return
		if (!this.hasEdge(source, destination)) {
			const edges = this.adjacencyList.get(source) as Edge[]
			const edge: Edge = { to: destination, weight }

			edges.push(edge)
		}
	}

	removeEdge(source: string, destination: string): void {
		if (!this.areValidVertices(source, destination)) return
		if (this.hasEdge(source, destination)) {
			const edges = this.adjacencyList.get(source) as Edge[]
			const filtered = edges.filter((edge) => edge.to !== destination)

			this.adjacencyList.set(source, filtered)
		}
	}

	hasEdge(source: string, destination: string): boolean {
		const edges = this.adjacencyList.get(source)

		return !!edges?.some((edge) => edge.to === destination)
	}

	private areValidVertices(source: string, destination: string): boolean {
		return source !== destination && this.hasVertex(source) && this.hasVertex(destination)
	}
}
