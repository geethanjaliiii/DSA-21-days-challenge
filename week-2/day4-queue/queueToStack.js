//que is fifo 
let queue=[1,2,3,4,5]
//in stack i should pop 5 first ,so that stack array should be in such a way
let stack=[]
while(queue.length){
    stack.pop(queue.shift())
}