class Node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }
    removeMiddle(){
        if(!this.head){
            throw new Error("LL is empty")
        }
        if(!this.head.next){
            //if no elemets in LL remove head
            this.head=null
            return
        }
        let slow=this.head
        let fast=this.head
        let prev=null
        //fast or fast.next becomes null 
        while(fast && fast.next){
            prev=slow
            slow=slow.next //slow moves to next
            fast=fast.next.next //fast moves by two steps
        }
        if(prev){
            prev.next=slow.next
            slow.next=null
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
     addFirst(value){
        const newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            return
        }
        newNode.next=this.head
        this.head=newNode
     } 
}

