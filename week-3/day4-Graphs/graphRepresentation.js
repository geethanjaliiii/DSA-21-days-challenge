//adjacency list
//pls refer graph.txt for more details

//1.add vertex
//2.add edge
//3.remove edge
//4.remove vertex

//*************************************************************
class Graph{
    constructor(){
      this.adjacencyList={} //like key value pairs
    }
   
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            throw new Error("invalid vertex")
        }
        //remove the vertex from adjacency list of other vertexes
        for(let key in this.adjacencyList){
            this.adjacencyList[key]=this.adjacencyList[key].filter((v)=>v!=vertex)
        }
        //delete that key itself
        delete this.adjacencyList[vertex]
    }

    removeEdge(vertex1,vertex2,isUndirected=false){
        if(!this.adjacencyList[vertex1]||!this.adjacencyList[vertex2]){
            throw new Error("Invalid edge")
        }
        this.adjacencyList[vertex1]=this.adjacencyList[vertex1].filter(v=>v!=vertex2)
        if(isUndirected){
            this.adjacencyList[vertex2]=this.adjacencyList[vertex2]
        }
    }
    display(){
        for(let key in this.adjacencyList){
            console.log(`${key}: [${this.adjacencyList[key].join(', ')}]`);
            
        }
    }
}
const graph=new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('D','C')
graph.display()