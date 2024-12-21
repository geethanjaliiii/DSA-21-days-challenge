class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(data) {
    const newNode = new Node(data);
    if (!this.front) {
      //when list is empty
      this.front =this.rear= newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }
  dequeue() {
    if(this.isEmpty()){
        console.log("list is empty");
        return
    }

    this.front = this.front.next;
    //sometimes front become null
    if(this.front==null){
        this.rear=null
    }
  }
  getFront(){
    if(this.isEmpty()){
        console.log('que empty');
        return
    }
    return this.front.data
  }
  getRear(){
    if(this.isEmpty()){
        console.log('que empty');
        return
    }
    return this.rear.data
  }

  isEmpty(){
    return this.front==null && this.rear==null
  }
}
// Driver code
const q = new Queue();

// Enqueue elements into the queue
q.enqueue(10);
q.enqueue(20);

// Display the front and rear elements of the queue
console.log("Queue Front:", q.getFront());
console.log("Queue Rear:", q.getRear());