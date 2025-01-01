//stack need push and pop
//push simillar to enque
//[1,2,3]=>que1
//queue2 [3,2,1]
//reverse que and perform dequeue operation
//3
//2
//1
class stackUsingQueue{
    constructor(){
        this.queue1=[]
        this.queue2=[]
    }
    push(data){
        this.queue1.push(data)
    }
    pop(){
        //pop operstion is costly
        if(!this.queue1.length){
            return 'stack is empty'
        }
        while(this.queue1.length>1){
            this.queue2.push(this.queue1.shift())//deque from q1
        }
        //q1=>[1,2,3]
        //q2=>[1,2]
        const poppedElement=this.queue1.shift()
        //return popped element seperately out of while loop
        //transfer back q2 to q1
        while(this.queue2.length){
            this.queue1.push(this.queue2.shift())
        }
      return poppedElement
    }
    display(){
        let list=''
        for(let elem of this.queue1){
            list+=elem+'-'
        }
        console.log(list);
        
    }
}
const stack=new stackUsingQueue()
stack.push(2)
stack.push(7)
stack.push(9)
stack.display()
stack.pop()
stack.display()