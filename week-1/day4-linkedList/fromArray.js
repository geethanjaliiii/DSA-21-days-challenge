class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  fromArray(array) {
    if (array.length == 0) {
      return null;
    }
    this.head = new Node(array[0]);
    let current = this.head;
    for (let i = 1; i < array.length; i++) {
      current.next = new Node(array[i]);
      current = current.next;
    }
  }
  display() {
    let current = this.head;
    let list = "";
    while (current) {
      list += current.data + "-->";
      current = current.next;
    }
    console.log(list, "null");
  }
}
const list = new LinkedList();
list.fromArray([0, 1, 5, 7]);
list.display();
