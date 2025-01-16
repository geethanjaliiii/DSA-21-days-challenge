class MaxHeap {
  constructor() {
    this.heap = [];
  }

  //use heapify instead
  insert(value) {
    this.heap.push(value);
    let index = this.heap.length - 1;
    this.bubbleup(index);
  }

  bubbleup(index) {
    //complexity-nlog(n)
    //if its the root element simply push otherwise no neded to bubble  up
    let current = this.heap[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.heap[parentIndex];
      if (parent > current) break; // no need to bubbleup
      //else swap both
      this.swap(index, parentIndex);
      index = parentIndex; //now the element is at its parent index
    }
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  deleteRoot() {
    if(this.heap.length==0)return null;
    if(this.heap.length==1)return this.heap.pop()
        const root=this.heap[0]
    this.heap[0] = this.heap.pop();
    let index=0;
    
    while(true){
        let largest=index
        let leftChild=2*index+1;
        let rightChild=2*index+2;
        if(leftChild<this.heap.length && this.heap[leftChild]>this.heap[largest]){
            largest=leftChild
        }
        if(rightChild<this.heap.length && this.heap[rightChild]>this.heap[largest]){
            largest=rightChild
        }
        if(largest===index) break;
        this.swap(index,largest)
        //move to the largest child index
        index=largest
    }
    return root
  }

  inorder() {
    let i = 0;
    while (i < this.heap.length) {
      console.log(this.heap[i++]);
    }
  }

}

const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(6);
maxHeap.insert(2);
maxHeap.insert(20);
maxHeap.deleteRoot()
maxHeap.inorder()
