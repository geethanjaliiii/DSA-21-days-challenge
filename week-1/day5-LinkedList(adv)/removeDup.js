//REMOVE FROM SORTED ARARAY
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
    addFirst(value){
        const newNode=new Node(value)
        if(!this.head){
            this.head=newNode
            return
        }
        newNode.next=this.head
        this.head=newNode
     }
     //UNSORTED
    removeDuplicates(){
        if(!this.head){
            throw new Error('list is empty')
        }
       
        let seen=new Set()
        let current=this.head
        let prev=null
      while(current){
         if(seen.has(current.data)){
            prev.next=current.next
         }else{
            seen.add(current.data)
            prev=current
         }
        
         current=current.next
      }
    

    } 

    removeDupsInSorting(){
        if(!this.head || !this.head.next){
            console.log("list is empty of only head");
            
            return
        }
       
        let current=this.head
        
        while(current && current.next){
        if(current.data==current.next.data){
            //till a different next is found ,current is not changed
          current.next=current.next.next
        }else{
            current=current.next
        }
       
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
const list=new LinkedList()
list.addFirst(1)
list.addFirst(2)
list.addFirst(2)
list.addFirst(4)
list.addFirst(4)
list.display()
list.removeDuplicates()
list.display()
