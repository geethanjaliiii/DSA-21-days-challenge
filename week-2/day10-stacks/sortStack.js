class Stack{
    constructor(){
      this.items=[]
      this.minStack=[]
      this.stack2=[]
    }
    push(data){
      this.items.push(data)
      if(this.minStack.length==0 ||data<=this.minStack[this.minStack.length-1]){
        this.minStack.push(data)
      }
    }
    pop(){
      if(this.items.length==0){
        return 
      }
      if(this.minStack.length && this.items.pop()===this.minStack[this.minStack.length-1]){
        this.minStack.pop()
      }
      
    }
    // reverse(){
    //   if(this.items.length==0){
    //     return 
    //   }
    //  while(this.items.length){
    //   this.stack2.push(this.items.pop())
    //  }
    //  while(this.stack2.length){
    //   this.items.push(this.stack2.shift())
    //  }
    //  return this.items
    // }
    display(){
      if(this.items.length==0){
        return
      }
      return this.items.join(',')
    }
    top(){
      if(this.items.length==0){
        return undefined
      }
     return this.items[this.items.length-1]
    }
    sort(){
      while(this.items.length){
        let temp=this.items.pop()
        while(this.stack2.length && temp>this.stack2[this.stack2.length-1]){
         this.items.push(this.stack2.pop())
        }
        this.stack2.push(temp)
      }
      while(this.stack2.length){
        this.items.push(this.stack2.pop())
      }
  return this.items
    }
    minElem(){
      if(this.minStack.length==0){
        return 'empty'
      }
        return this.minStack[this.minStack.length-1]
    }
  }
  //1234
  //4321
  const stack=new Stack()
  stack.push(2)
  stack.push(39)
  stack.push(23)
  stack.push(3)
  console.log(stack.minElem());
  console.log(stack.sort());