import { PriorityQueue } from 'data structures/PriorityQueue'
import type { Graph } from 'data structures/graphs/Graph'

type Edge<T> = {
	to: T
	weight: number
}

export const shortestPath = <T>(source: T, destination: T, graph: Graph<T, Edge<T>>): T[] => {
	const path: T[] = []
	const queue = new PriorityQueue<T>()
	const distances: Map<T, number> = new Map()
	const previous: Map<T, T | null> = new Map()

	graph.adjacencyList.forEach((_, vertex) => {
		const priority = vertex === source ? 0 : Infinity

		queue.enqueue(vertex, priority)
		distances.set(vertex, priority)
		previous.set(vertex, null)
	})

	while (queue.length) {
		const current = queue.dequeue() as T
		const edges = graph.adjacencyList.get(current) as Edge<T>[]

		edges.forEach((edge) => {
			const newDistance = (distances.get(current) as number) + edge.weight
			const oldDistance = distances.get(edge.to) as number

			if (newDistance < oldDistance) {
				distances.set(edge.to, newDistance)
				previous.set(edge.to, current)
				queue.enqueue(edge.to, newDistance)
			}
		})
	}

	let current = destination

	while (previous.has(current)) {
		path.push(current)
		current = previous.get(current) as T
	}

	return path.reverse()
}
