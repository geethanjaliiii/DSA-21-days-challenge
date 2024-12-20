class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null; //points to fist node
    this.tail = null; //points to last node
  }
  addAtBeginning(data) {
    const newNode = new Node(data);
    if (!this.head) {
      //if list is empty

      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; //think forwqard
      this.head.prev = newNode; //and backward
      this.head = newNode; //assign as new node
    }
  }
  insertAtEnd(data) {
    if(this.tail==null){
        this.tail=newNode
        this.head=newNode
    }
    newNode.prev=this.tail
    this.tail.next = newNode;
   //finally assign as tail
   this.tail=newNode
  }

  deleteFromEnd(){
    
    if(!this.tail){
        console.log("list is empty");
       
    }else if(this.head==this.tail){
        this.head=null;
        this.tail=null
    }else{
        this.tail=this.tail.prev
        this.tail.next=null
    }
   
  }
  traverseForward(){
    let current=this.head
    while(current){
        current=current.next
    }
  }
}
