class Graph {
  constructor() {
    this.adjacentList = [];
  }
  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, isUndirected = false) {
    if (!this.adjacentList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacentList[vertex2]) this.addVertex(vertex2);

    this.adjacentList[vertex1].push(vertex2);
    if (isUndirected) {
      this.adjacentList[vertex1].push(vertex2);
    }
  }

  bfs(start) {
    let queue = [start];
  }

  dfs(start) {
    let stack = [start];
    let visited = [];
    let result = [];

    //visited=[A B]
    //result=[A B]
    //stack=[C G]
    while (stack.length) {
      const current = stack.pop();
      if (!visited.has(current)) {
        //VIEWED
        visited.add(current);
        result.push(current);
      }
      const neighbours = this.adjacentList[current];
      for (let i = neighbours.length - 1; i >= 0; i--) {
        //we need to to push in reverse order (lifo of stack)
        //THAT WILL ENSURE LEFT TO RIGHT DEPTH
        if (!visited.has(neighbors[i])) {
          stack.push(neighbors[i]);
        }
      }
    }
  }
}
