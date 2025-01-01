class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    //check if stack is empty
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop()
  }

peek(){
    if(this.isEmpty()){
        return 'Stack is empty'
    }
    return this.items[this.size()-1]
}
  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
  display(){
    console.log(this.items);
    
  }
}
module.exports=Stack
// const stack =new Stack()
// stack.push(20)
// stack.push(28)
// stack.push(30)
// stack.display()
// console.log(stack.peek());
// stack.pop()
// console.log(stack.peek());

