class MaxHeap{
    constructor(){
        this.heap=[]
    }
    insert(val){
        if(this.heap.length==0) {
            this.heap.push(val)
            return
        }

    }
    //use heapify as bottom up approach ,start from non leaf nodes, leaf nodes are a
    //already considered as heap
    heapify(length,index){
        let largest=index;//checking start from root at imdex=0
        let left=2*index+1
        let right=2*index+2

        if(left<length && this.heap[left]>this.heap[largest]){
            largest=left
        }
        if(right<length && this.heap[right]>this.heap[largest]){
            largest=right
        }
        //we are continue recursion only if indexs mismatch
   if(largest!=index){
       this.swap(largest,index)
       //now we need to check the index of child node where we found the largest
       this.heapify(length,largest)
   }
    }
    swap(idx1,idx2){
        [this.heap[idx1],this.heap[idx2]]=[this.heap[idx2],this.heap[idx1]]
    }
    getMax(){
        return this.isEmpty()?null:this.heap[0]
    }
    isEmpty(){
        return this.heap.length===0
    }
}