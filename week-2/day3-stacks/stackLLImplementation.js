
class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}
class Stack{
    constructor(){
     this.head=null //initializing a stack
    }
    push(data){
        const newNode=new Node(data)
     
        newNode.next=this.head;
        this.head=newNode;
    }
    isEmpty(){
        return this.head===null
    }
    pop(){
        if(this.isEmpty()){
            return 'Stack is empty'
        }
        //assign current top to a temp variable
        let temp=this.head;
        this.head=temp.next;
        temp=null //deallocate memory
    }
    peek(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.head.data
    }
}
const stack=new Stack()
stack.push(50)
stack.push(40)
stack.push(30)
stack.push(20)
stack.pop()
console.log(stack.peek());
