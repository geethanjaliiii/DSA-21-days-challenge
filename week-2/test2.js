// class Stack{
//     constructor(){
//         this.stack=[]
//     }
//     push(data){
//         this.stack.push(data)
//     }
//     isEmpty(){
//         return this.stack.length===0
//     }
//     pop(){
//         if(this.isEmpty()){
//             console.log("Stack is empty");
//             return
//         }
//         this.stack.pop()
//     }
//     display(){
//         if(this.isEmpty()){
//             return "Stack is empty"
//         }
//         let list=''
//         for(let i=0;i<this.stack.length;i++){
//             list+=this.stack[i]+'->'
//         }
//         console.log(list);
        
//     }
// }
// const stack= new Stack()
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.display()

function mergeSort(arr){
    if(arr.length<=1) return arr
    let mid=Math.floor(arr.length/2) 
   let left= mergeSort(arr.slice(0,mid))
   let right= mergeSort(arr.slice(mid))
   console.log(left,right);
   
   return merge(left,right)
}
function merge(left,right){
    let i=0
    let j=0
    let sortedArr=[]
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            sortedArr.push(left[i++])
        }else{
            sortedArr.push(right[j++])
        }
    }
    while(i<left.length){
        sortedArr.push(left[i++])
    }
    while(j<right.length){
        sortedArr.push([j++])
    }
    return sortedArr
}
console.log(mergeSort([64, 34, 25, 12, 22, 11, 90]));
