// GRAPHBREADTHFIRSTSEARCH

// Breadth First Search algorithm to visit every vertex of a graph

// import Graph data structure
const Graph = require('../../Data Structures/JavaScript/Graph');
// import Queue data structure
const Queue = require('../../Data Structures/JavaScript/Queue');

const graph = new Graph()
  .addVertex('A')
  .addVertex('B')
  .addVertex('C')
  .addVertex('D')
  .addVertex('E')
  .addVertex('F')
  .addEdge('A', 'B')
  .addEdge('A', 'C')
  .addEdge('B', 'D')
  .addEdge('C', 'E')
  .addEdge('D', 'E')
  .addEdge('D', 'F')
  .addEdge('E', 'F');

const graphBreadthFirstSearch = (start) => {
  const queue = new Queue();
  queue.enqueue(start);
  const vertices = [];
  const visited = {};
  visited[start] = true;
  while (queue.first) {
    const vertex = queue.dequeue();
    vertices.push(vertex);
    graph.adjacencyList[vertex].forEach((edge) => {
      if (!visited[edge]) {
        visited[edge] = true;
        queue.enqueue(edge);
      }
    });
  }
  return vertices;
};

// TEST

console.log(graphBreadthFirstSearch('A'));
// [ 'A', 'B', 'C', 'D', 'E', 'F' ]
