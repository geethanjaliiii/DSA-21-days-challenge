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
   
    insertbefore(data,value){
        if(!value){
            return
        }
        const newNode=new Node(data)
        if(!this.head ){
            console.log("ll is empty");
         return
        }

if(this.head.data==value){
    newNode.next=this.head
    this.head=newNode
    return
}
//[9,n]-[40,l]-[9,l]-[7,null]
let current=this.head
while(current.next ){
    if(current.next.data==value){
        newNode.next=current.next
        current.next=newNode
        return
    }
    current=current.next
}
if(!current.next){
        console.error("Value not found");
        return
}
    }
    insertAfter(data,value){
        if(!value){
            console.error("value is not provided");
            return 
        }
        const newNode=new Node(data)
        if(!this.head){
           this.head=newNode
           return
        }
        let current=this.head
        while(current){
            if(current.data==value){
                newNode.next=current.next
                current.next=newNode
                return
            }
            current=current.next
        }
    }
    insertBeforeAndAfter(data,value){
        if(!value){
            console.error("value is not provided");
            return 
        }
        const newNodeBefore=new Node(data)
        const newNodeAfter=new Node(data)
        if(!this.head){
            console.error("value not found");
        
           return
        }
      if(this.head.data==value){
        console.log(this.head);
        
        newNodeBefore.next=this.head
        this.head=newNodeBefore
        console.log(this.head, '  ',newNodeBefore)
        newNodeAfter.next=this.head.next
        this.head.next=newNodeAfter
      }
        
        let current=this.head
     while(current ){
        if(current.next && current.next.data==value){
            // [,l]-[k,l]-[fggg]
            // [h,l]-{newNodeBefore,l}-[k,l]-{newNodeAfter}-[fggg]
            newNodeBefore.next=current.next
            current.next=newNodeBefore
            newNodeAfter.next=newNodeBefore.next.next
            newNodeBefore.next.next=newNodeAfter
            return
        }
        current=current.next
     }
     console.error("Value not found in the list");

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
const list=new LinkedList()

list.addFirst(2)
list.addFirst(8)
list.insertbefore(4,8)
list.display()