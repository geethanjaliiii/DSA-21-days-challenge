class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null; //initially the head points to null,as there is no nodes
  }
  //add first
  addFirst(data) {
    const newNode = new Node(data);
    newNode.next = this.head; //whatever is there in head will come to next of newnode ==>if LL is empty newNode.next=null
    //we should assign the next in new node before assigning the the head
    this.head = newNode; //assign head
  }
  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    //when current.next.next==null
    //we should add
    while (current.next) {
      current = current.next;
    }
    //if current.next==null
    current.next = newNode;
  }

  addAt(data, index) {
    //check if the index is valid
    if (index < 0) {
      throw new Error("Invalid index");
    }

    const newNode = new Node(data);
    if (index == 0) {
      //before assigning as the head ,tell him about the next link
      newNode.next = this.head;
      //assign as head
      this.head = newNode;
      return;
    }
    //to find the pos of index
    let current = this.head;
    let prev = null;
    let currentIdx = 0;
    //it will loop till reaching index ,then current indx become index
    while (current != null && currentIdx < index) {
      prev = current;
      current = current.next;
      currentIdx++;
    }
    if (currentIdx !== index) {
      throw new Error("Index not bound");
    }
    prev.next = newNode; ///prev points to newnode
    newNode.next = current; //new node points to current
  }
  display() {
    let current = this.head;
    let list = "";
    while (current) {
      list += current.data + "-->";
      current = current.next;
    }
    console.log(list + "null");
  }
}

const list = new LinkedList();
list.addFirst(10);
list.addLast(1);
list.addLast(50);
list.addAt(7, 0);
list.display();
