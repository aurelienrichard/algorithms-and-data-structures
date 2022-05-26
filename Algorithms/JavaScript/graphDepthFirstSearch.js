// GRAPHDEPTHFIRSTSEARCH

// DEPTH First Search algorithm to visit every vertex of a graph

// import Graph data structure
const Graph = require('../../Data Structures/JavaScript/Graph');

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

const graphDepthFirstSearch = (start) => {
  const vertices = [];
  const visited = {};
  const traverse = (vertex) => {
    visited[vertex] = true;
    vertices.push(vertex);
    graph.adjacencyList[vertex].forEach((edge) => {
      if (!visited[edge]) traverse(edge);
    });
  };
  traverse(start);
  return vertices;
};

// TEST

console.log(graphDepthFirstSearch('A'));
// [ 'A', 'B', 'D', 'E', 'C', 'F' ]
