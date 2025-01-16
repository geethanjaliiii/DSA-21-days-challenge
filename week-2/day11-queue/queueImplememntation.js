class Queue{
    constructor(){
        this.queue=[]
    }
    isEmpty(){
        return this.queue.length===0
    }
    enqueue(data){
        this.queue.push(data)
    }
    dequeue(){
       if(this.isEmpty()){
        return 'Queue is empty'
       }
       this.queue.shift()
    }
    display(){
      if(this.isEmpty()){
        return 'queue is empty'
      }
      let list=''
      for(let i=0;i<this.queue.length;i++){
        list+=this.queue[i]+'<-'
      }
      console.log(list);
      
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

// class Queue{
//     constructor(c){
//         this.queue=[];
//         this.front=0;
//         this.size=0
//         this.capacity=c
//     }
//     //add an item to the end of queue
//     enqueue(data){
//         if(this.size===this.capacity){
//             console.log('Queue is full');
//             return
//         }
//         this.queue[this.front+this.size]=data;
//         this.size++//increment size of queue
//     }
//     //remove an item from front of queue
//     dequeue(){
//         if(this.size===0){
//             console.log("Queue is empty");
//             return
//         }
//         for(let i=1;i<this.size;i++){
//             this.queue[i-1]=this.queue[i]
//         }
//         this.size--
//     }
//     display(){
//         if(this.size==0){
//             console.log("Queue is empty");
//             return
//         }
//         let list=''
//         for(let i=0;i<this.size;i++){
//             list+=this.queue[i]+'-->'
//         }
//         console.log(list);
//     }
//     getFront(){
//         if(!this.size){
//             console.log("Queue is empty");
//             return
//         }
//         console.log("Front is",this.queue[0]);
//     }
// }