class Node{
    constructor(data){
        this.data=data;
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
    }
    addFirst(data){
        const newNode=new Node(data)
        if(!this.head){
          this.head=newNode
          return
        }
        newNode.next=this.head
        this.head=newNode
    }
    reverse(){
        if(!this.head){
            return
        }
        let prev=null;
        let current=this.head;
        while(current){
            const next=current.next //safely backup
            current.next=prev//next points to prev
            prev=current //saved current in prev
            current=next //will moves to next
        }
        return prev //it will store everyting in stack and unwid it 
    }
    display(){
        let list=''
        if(!this.head){
            console.log("list is empty");
            return
            
        }
        let current=this.head
        while(current){
            console.log(current);
            list+=current.data+'-->'
            current=current.next
        }
        console.log(list+'null');
        
    }
    displayReverse(node=this.head){
       
        if(!node) return 
        
        this.displayReverse(node.next)
        
        console.log(node.data+'-->');//print after recursion
    }
}
const list=new LinkedList()
list.addFirst(20)
list.addFirst(3)
list.addFirst(5)
list.display()
list.displayReverse()