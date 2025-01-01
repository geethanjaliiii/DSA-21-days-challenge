class stackUsingQueue{
    constructor(){
        this.stack1=[];//this stack is for enque operation in queue
        this.stack2=[];//for dequeue operation , 
    }
    enqueue(data){
        this.stack1.push(data)
    }
    dequeue(){
        //reversing elements in stack 1 and poping top emenent then pushing back all to stack1
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop())
        }
        
        //pop in top element ,equivalent to shifting in queue
        this.stack2.pop()
        while(this.stack2.length){
            this.stack1.push(this.stack2.pop())
        }
    }
    display(){
        let queue='|'
        for(let data of this.stack1){
            queue+=data+'|'
        }
        console.log(queue);
        
    }
}
let queue=new stackUsingQueue()
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(5)
queue.display()
queue.dequeue()
queue.display()