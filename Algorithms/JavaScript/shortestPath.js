// SHORTESTPATH

// Dijkstra's shortest path algorithm implementation

// import Weighted Graph data structure
const WeightedGraph = require('../../Data Structures/JavaScript/WeightedGraph');
// import Priority Queue data structure
const PriorityQueue = require('../../Data Structures/JavaScript/PriorityQueue');

const graph = new WeightedGraph()
  .addVertex('A')
  .addVertex('B')
  .addVertex('C')
  .addVertex('D')
  .addVertex('E')
  .addVertex('F')
  .addEdge('A', 'B', 4)
  .addEdge('A', 'C', 2)
  .addEdge('B', 'E', 3)
  .addEdge('C', 'D', 2)
  .addEdge('C', 'F', 4)
  .addEdge('D', 'E', 3)
  .addEdge('D', 'F', 1)
  .addEdge('E', 'F', 1);

const shortestPath = (start, end) => {
  const queue = new PriorityQueue();
  const distances = {};
  const previous = {};
  const path = [];
  Object.keys(graph.adjacencyList).forEach((vertex) => {
    const priority = vertex === start ? 0 : Infinity;
    distances[vertex] = priority;
    queue.enqueue(vertex, priority);
    previous[vertex] = null;
  });
  while (queue.values.length) {
    let current = queue.dequeue().value;
    if (current === end) {
      while (previous[current]) {
        path.push(current);
        current = previous[current];
      }
      return path.concat(current).reverse();
    }
    graph.adjacencyList[current].forEach(({ vertex, weight }) => {
      const distance = distances[current] + weight;
      if (distance < distances[vertex]) {
        distances[vertex] = distance;
        previous[vertex] = current;
        queue.enqueue(vertex, distance);
      }
    });
  }
};

console.log(shortestPath('A', 'E')); // [ 'A', 'C', 'D', 'F', 'E' ]
