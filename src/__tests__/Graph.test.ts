import { test, expect } from 'vitest'
import { DirectedWeightedGraph } from 'data structures/DirectedWeightedGraph'

test('directed weighted graph', () => {
	const graph = new DirectedWeightedGraph<string>()

	graph.addVertex('A')
	expect(graph.hasVertex('A')).toBeTruthy()
	graph.addVertex('B')
	expect(graph.hasVertex('B')).toBeTruthy()
	graph.addVertex('B')
	graph.addVertex('C')
	expect(graph.hasVertex('C')).toBeTruthy()
	graph.addVertex('D')
	expect(graph.hasVertex('D')).toBeTruthy()
	graph.removeVertex('E')
	graph.removeVertex('D')
	expect(graph.hasVertex('D')).toBeFalsy()
	graph.addEdge('A', 'B', 4)
	graph.addEdge('A', 'B', 8)
	expect(graph.hasEdge('A', 'B')).toBeTruthy()
	graph.removeEdge('A', 'B')
	expect(graph.hasEdge('A', 'B')).toBeFalsy()
	graph.addEdge('A', 'A', 5)
	expect(graph.hasEdge('A', 'A')).toBeFalsy()
})
