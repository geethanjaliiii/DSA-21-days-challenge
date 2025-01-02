class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, isUndirected = false) {
    //assuming its directed
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].push(vertex2);
    //if graph is undirected
    if (isUndirected) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
  dfsIterative(start) {
    let visited = new Set();
    let result = []; //store traversal order
    let stack = [start];

    while (stack.length) {
      const current = stack.pop();
      if (!visited.has(current)) {
        visited.add(current);
        result.push(current);
      }

      const neighbours = this.adjacencyList[current];
      for (let i = neighbours.length - 1; i >= 0; i--) {
        //last added elements will be processed first
        if (!visited.has(neighbours[i])) {
          stack.push(neighbours[i]);
        }
      }
    }
    return result;
  }
  dfsRecursive(start) {
    let visited = new Set();
    let result = [];

    let dfsHelper = (vertex) => {
      if (!vertex || visited.has(vertex)) return; //backtrack
      visited.add(vertex);
      result.push(vertex);

      //    for(let neighbour of this.adjacencylist[vertex]){
      //     bfsHelper(neighbor)
      //    }
      this.adjacencyList[vertex].forEach((neighbor) => dfsHelper(neighbor));
    };
    //fist we start from start ele
    dfsHelper(start);
    return result;
  }

  bfs(start) {
    let visited = new Map();
    let queue = [start];
    let result = [];
    while (queue.length) {
      let current = queue.shift();
      if (!visited.has(current)) {
        visited.add(current)
        result.push(current);
      }
      for (let neighbor of this.adjacencyList[current]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
    return result;
  }
}
const graph= new Graph()
graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("C",'D')
graph.addEdge("C",'E')
graph.addEdge("B",'G')
console.log(graph.adjacencyList);

console.log(graph.dfsIterative('A'));
console.log(graph.bfs('A'));

// Depth First Search (DFS):
// javascript
// Copy code
// function dfs(graph, start, visited = new Set()) {
//     if (visited.has(start)) return;
//     visited.add(start);
//     console.log(start);
//     for (let neighbor of graph[start]) {
//         dfs(graph, neighbor, visited);
//     }
// }
// Breadth First Search (BFS):
// javascript
// Copy code
// function bfs(graph, start) {
//     let queue = [start];
//     let visited = new Set();
//     visited.add(start);

//     while (queue.length > 0) {
//         let node = queue.shift();
//         console.log(node);
//         for (let neighbor of graph[node]) {
//             if (!visited.has(neighbor)) {
//                 visited.add(neighbor);
//                 queue.push(neighbor);
//             }
//         }
//     }
// }
