class Queue{
    constructor(c){
        this.queue=[];
        this.front=0;
        this.size=0
        this.capacity=c
    }
    enqueue(data){
        if(this.size===this.capacity){
            console.log('Queue is full');
            return
        }
        this.queue[this.front+this.size]=data;
        this.size++//increment size of queue
    }
    dequeue(){
        if(this.size===0){
            console.log("Queue is empty");
            return
        }
        for(let i=1;i<this.size;i++){
            this.queue[i-1]=this.queue[i]
        }
        this.size--
    }
    display(){
        if(this.size==0){
            console.log("Queue is empty");
            return
        }
        let list=''
        for(let i=0;i<this.size;i++){
            list+=this.queue[i]+'-->'
        }
        console.log(list);
    }
    getFront(){
        if(!this.size){
            console.log("Queue is empty");
            return
        }
        console.log("Front is",this.queue[0]);
    }
}
const queue=new Queue(4)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(40)
queue.display()
queue.dequeue()
queue.display()
queue.getFront()