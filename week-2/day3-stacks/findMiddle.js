class Stack{
    constructor(){
        this.items=[]
        this.stack2=[]
    }
    push(data){
        this.items.push(data)
    }
    pop(){
        if(this.items.length===0){
            console.log("Stack is empty");
            return
        }
       return this.items.pop()
    }
    findMiddle(){
     return this.items[Math.floor(this.items.length/2)]
    }
    removeFromMiddle(){
        if(this.items.length==0){
            return 'empyu'
        }
        let ind=Math.floor(this.items.length/2)
          for(let i=this.items.length-1;i>ind;i--){
            this.stack2.push(this.items.pop())
          }
          let middle=this.items.pop()
        while(this.stack2.length){
            this.items.push(this.stack2.pop())
        }
        return middle
    }
    display(){
        if(this.items.length==0){
            console.log("stack is empty");
            return 
        }
        let list=''
        for(let i=0;i<this.items.length;i++){
            list+=this.items[i]+'->'
        }
       console.log(list);
       
    }
}
let stack=new Stack()
stack.push(5)
stack.push(3)
stack.push(4)
stack.push(9)
stack.push(10)
stack.display()
console.log('middle is ',stack.findMiddle());
stack.removeFromMiddle()
stack.display()
//****************************using LL************************
// class Node{
//     constructor(data){
//         this.data=data;
//         this.next=null
//     }
// }
// class Stack{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     push(data){
//         const newNode=new Node(data)
//         if(!this.head){
//             this.head=newNode
//             return
//         }
//       newNode.next=this.head
//       this.head=newNode
//       this.size++
//     }
//     pop(){
//         if(this.isEmpty()){
//             return 'Stack is empty'
//         }
//         this.head=this.head.next
//         this.size--
//     }
//     isEmpty(){
//         return this.head===null
//     }
//     removeMiddle(){
//         if(this.isEmpty()){
//             console.log('Stack is empty');
//             return
//         }
//         let prev=null
//         let slow=this.head;
//         let fast=this.head;
//         while(fast&&fast.next){
//             prev=slow
//             slow=slow.next;
//             fast=fast.next.next
//         }
//         prev.next=slow.next
//         this.size--
//     }
//     display(){
//         if(!this.head){
//            console.log('stack is empty');
//            return
//         }
//         let current=this.head
//         let list=''
//         while(current){
//            list+=current.data+'-->'
//             current=current.next
//         }
//         console.log(list);
        
//     }
// }
// let stack2=new Stack()
// stack2.push(1)
// stack2.push(2)
// stack2.push(3)
// stack2.push(4)
// stack2.display()
// stack2.pop()
// stack2.display()
// stack2.removeMiddle()
// stack2.display()