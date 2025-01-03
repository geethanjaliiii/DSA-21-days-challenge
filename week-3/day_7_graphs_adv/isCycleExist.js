//APPROACH

//1IN THIS QN, if you use the visited algorithm in dfs for directed graph,it will fail
//as it may come accross the same vertex but the direction could be different

//so we need to initialise a pathVisited array means we are on same path
//ref:https://www.youtube.com/watch?v=9twcmtQj4DU

//CYCLIC CONDITION IS SATISFIED==>when on the path you visited the same vertex


//if we initially start with checking each vertex through dfs ,it will take time
//so we go component wise,through loop in adjacency list
//if condition fail 

//ALGORITHIM
//1. we take each vertex and check if rhey are fully explored(visited will hep us)

//2.we call dfs ,the dfs will return true if it finds a cycle, then we will immediety
//  end checking all vetex in adjacency list

//3.inside the isCyclic, we dont simply traverse for each vertex everytime, mey be for first vertex,it could be marked as visited
//so we continue checking other vertices

//4.in DFS function, we add that vertex to visited and path visited, 
//5.we loop through the neighbours of each vertex and if we reach a dead end (no neighbours) we return false
// 6.if the neighbour is not visited we explore that vertex (make path visited and visited) 
// 7.if the neighbour is already visted and its path visited==>cycle exist we return true

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  //is cyclic for directed
  isCyclic() {

    let visited=new Set();
    let pathVisited=new Set();

    for(let vertex in this.adjacencyList){
      if(this.dfsCheck(vertex,visited,pathVisited)){
        return true
      }
    }
    //after traversing all vertex
    return false
  }
  dfsCheck(vertex,visited,pathVisited){

    visited.add(vertex)
    pathVisited.add(vertex)
    for(let neighbour of this.adjacencyList[vertex]){
      //if its not explored
      if(!visited.has(neighbour)){

        this.dfsCheck(neighbour,visited,pathVisited)
      }else if(pathVisited.has(neighbour)){
        //if its already visited and in same path
        return true
        
      }
    }
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, isUnDirected=false) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].push(vertex2);
    if (isUnDirected) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }
}
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("C", "A");
graph.addEdge("C", "E");
graph.addEdge("E", "B");
graph.addEdge("B", "D");
graph.addEdge("B", "A");
console.log(graph.isCyclic('A'));
