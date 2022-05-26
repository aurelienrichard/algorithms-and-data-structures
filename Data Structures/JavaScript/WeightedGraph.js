/* eslint-disable lines-between-class-members */
// GRAPH

// Weighted undirected Graph implementation

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  // add new vertex to the graph
  addVertex(vertex) {
    if (this.hasVertex(vertex)) return undefined;
    this.adjacencyList[vertex] = [];

    return this;
  }
  // remove given vertex from the graph and all edges related to it
  removeVertex(vertex) {
    if (!this.hasVertex(vertex)) return undefined;
    this.adjacencyList[vertex].forEach((edge) => {
      this.removeEdge(vertex, edge);
    });
    delete this.adjacencyList[vertex];

    return this;
  }
  // return true or false based on whether given vertex exists within the graph
  hasVertex(vertex) {
    return Object.prototype.hasOwnProperty.call(this.adjacencyList, vertex);
  }
  // add edge connecting two given vertices
  addEdge(vertex1, vertex2, weight) {
    if (
      vertex1 === vertex2 ||
      !this.hasVertex(vertex1) ||
      !this.hasVertex(vertex2) ||
      this.hasEdge(vertex1, vertex2)
    )
      return undefined;
    this.adjacencyList[vertex1].push({ vertex: vertex2, weight });
    this.adjacencyList[vertex2].push({ vertex: vertex1, weight });

    return this;
  }
  // remove edge connecting two given vertices if there is one
  removeEdge(vertex1, vertex2) {
    if (
      vertex1 === vertex2 ||
      !this.hasVertex(vertex1) ||
      !this.hasVertex(vertex2) ||
      !this.hasEdge(vertex1, vertex2)
    )
      return undefined;
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      ({ vertex }) => vertex !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      ({ vertex }) => vertex !== vertex1
    );

    return this;
  }
  // return true or false based on whether an edge connecting two given vertices exists
  hasEdge(vertex1, vertex2) {
    return (
      !!this.adjacencyList[vertex1]?.some(({ vertex }) => vertex === vertex2) &&
      !!this.adjacencyList[vertex2]?.some(({ vertex }) => vertex === vertex1)
    );
  }
}

module.exports = WeightedGraph;
