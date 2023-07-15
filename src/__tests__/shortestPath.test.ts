import { expect, test } from 'vitest'
import { shortestPath } from 'algorithms/shortestPath'
import { DirectedWeightedGraph } from 'data structures/DirectedWeightedGraph'

test('shortest path', () => {
	const graph = new DirectedWeightedGraph<string>()

	graph.addVertex('A')
	graph.addVertex('B')
	graph.addVertex('C')
	graph.addVertex('D')
	graph.addVertex('E')
	graph.addVertex('F')
	graph.addEdge('A', 'B', 4)
	graph.addEdge('A', 'C', 2)
	graph.addEdge('B', 'E', 3)
	graph.addEdge('C', 'D', 2)
	graph.addEdge('C', 'F', 4)
	graph.addEdge('D', 'E', 3)
	graph.addEdge('D', 'F', 1)
	graph.addEdge('F', 'E', 1)

	expect(shortestPath('A', 'E', graph)).toEqual(['A', 'C', 'D', 'F', 'E'])
})
