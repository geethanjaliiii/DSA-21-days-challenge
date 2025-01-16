//**********************************************bubblesort********************************************************
// function bubbleSort(arr){
//   let n=arr.length
//   let swapped;
//   for(let i=0;i<n-1;i++){
//     swapped=false;
//     for(let j=0;j<n-i-1;j++){
//       if(arr[j]>arr[j+1]){
//         [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
//         swapped=true
//       }
//     }
//     if(!swapped){
//       break;
//     }
//   }
//   return arr
// }

// console.log(bubbleSort([3,,10,5,7,8,9,7]));

//************************************selection sort**************************************************

// function selectionSort(arr){
//   for(let i=0;i<arr.length;i++){
//     let minIdx=i
//     for(let j=i;j<arr.length;j++){
//       if(arr[j]<arr[minIdx]){
//         minIdx=j
//       }
//     }
//     if(minIdx!=i){
//       [arr[minIdx],arr[i]]=[arr[i],arr[minIdx]]
//     }
//   }
//   return arr
// }
// console.log(selectionSort([3,10,5,7,8,9,7]));

//****************************************Insertion sort************************************************** */
// function insertionSort(arr){
//   for(let i=1;i<arr.length;i++){
//     let current=arr[i];
//     let j=i-1;
//     while(j>=0 && arr[j]>current){
//       arr[j+1]=arr[j];
//       j--
//     }
//     //j will decrement and j+1 will be the correct pos for current
//     arr[j+1]=current
//   }
//   return arr
// }
// console.log(insertionSort([3,10,5,7,8,9,7]));
//

//********************************merge sort ********************/
// function mergeSort(arr){
//   if(arr.length<=1){
//     return arr //basecase single-elemented array
//   }
 
//   let mid=Math.floor(arr.length/2)
//  let leftArr= mergeSort(arr.slice(0,mid))
//   let rightArr=mergeSort(arr.slice(mid))
//   return merge(leftArr,rightArr)
// }
// function merge(left,right){
//   let sortedArr=[]
//   let i=0,j=0;
// while(i<left.length && j<right.length){
//   if(left[i]<right[j]){
//     sortedArr.push(left[i++])
//   }else{
//     sortedArr.push(right[j++])
//   }
// }
// while(i<left.length){
//   sortedArr.push(left[i++])
// }
// while(j<right.length){
//   sortedArr.push(right[j++])
// }
// return sortedArr
// }
// console.log(mergeSort([3,10,5,7,8,9,7]));

//*******************quick sort************************* */
// function quickSort(arr,lb=0,ub=arr.length-1){
// if(lb<ub){
//   let loc=partition(arr,lb,ub)
// quickSort(arr,lb,loc-1)
// quickSort(arr,loc+1,ub)
 
// }
// return arr

// }
// function partition(arr,lb,ub){
//   let start=lb;
//   let end=ub;
//   let pivot=arr[lb]
//   while(start<end){
//   while(arr[start]<=pivot){
//     start++
//   }
//   while(arr[end]>pivot){
//     end--
//   }
//   if(start<end){
//     [arr[start],arr[end]]=[arr[end],arr[start]]
//   }
//   }
//   [arr[lb],arr[end]]=[arr[end],arr[lb]]
//   return end
// }
// console.log(quickSort([7,5,7,9,4,2,19]));

//*****************ll stack implementation */
// class Node{
//   constructor(data){
//     this.data=data;
//     this.next=null
//   }
// }
// class Stack{
//   constructor(){
//     this.head=null
//   }
//   isEmpty(){
//     return this.head==null
//   }
//   push(data){
//     const newNode=new Node(data)
//     if(!this.head){
//       this.head=newNode
//       return
//     }
//     newNode.next=this.head
//     this.head=newNode
//   }
//   pop(){
//     if(this.isEmpty()){
//       return undefined
//     }
//     this.head=this.head.next
//   }
  
//   display(){
//     if(this.isEmpty()){
//       console.log('stack is empty');
//       return
//     }
//     let list=''
//     let current=this.head;
//     while(current){
//       list+=current.data+'-->';
//       current=current.next
//     }
//     console.log(list);
//   }
// }
//********************sort stack */
// class Stack{
//   constructor(){
//     this.items=[]
//     this.minStack=[]
//     this.stack2=[]
//   }
//   push(data){
//     this.items.push(data)
//     if(this.minStack.length==0 ||data<=this.minStack[this.minStack.length-1]){
//       this.minStack.push(data)
//     }
//   }
//   pop(){
//     if(this.items.length==0){
//       return 
//     }
//     if(this.minStack.length && this.items.pop()===this.minStack[this.minStack.length-1]){
//       this.minStack.pop()
//     }
    
//   }
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
//   display(){
//     if(this.items.length==0){
//       return
//     }
//     return this.items.join(',')
//   }
//   top(){
//     if(this.items.length==0){
//       return undefined
//     }
//    return this.items[this.items.length-1]
//   }
//   sort(){
//     while(this.items.length){
//       let temp=this.items.pop()
//       while(this.stack2.length && temp>this.stack2[this.stack2.length-1]){
//        this.items.push(this.stack2.pop())
//       }
//       this.stack2.push(temp)
//     }
//     while(this.stack2.length){
//       this.items.push(this.stack2.pop())
//     }
// return this.items
//   }
//   minElem(){
//     if(this.minStack.length==0){
//       return 'empty'
//     }
//       return this.minStack[this.minStack.length-1]
//   }
// }
//1234
//4321
// const stack=new Stack()
// stack.push(2)
// stack.push(39)
// stack.push(23)
// stack.push(3)
// console.log(stack.minElem());
// console.log(stack.sort());

// console.log(stack.display());

//*******queue************************* */
// class Node{
//   constructor(data){
//     this.data=data;
//     this.next=this.next;
//   }
// }
// class Queue{
//   constructor(){
//     this.front=null;
//     this.rear=null;
//     this.size=0
//   }
//   enqueue(data){
//     const newNode=new Node(data)
//     if(this.rear==null){
//       this.front=this.rear=newNode
     
//     }else{
//       this.rear.next=newNode;
//       this.rear=newNode
//     }    
//     this.size++
//   }
//   dequeue(){
//     if(!this.front){
//       return 'queue is empty'
//     }
//     this.front=this.front.next;
//     this.size--
//     if(this.front===null){
//       this.rear=null
//     }
//   }
// }

//******************************queueeu********* */
// class Queue{
//   constructor(){
//     this.queue=[]
//     this.queue2=[]
//   }
//   enqueue(data){
//     this.queue.push(data)
//   }
//   isEmpty(){
//     return this.queue.length==0
//   }
//   dequeue(){
//     if(this.isEmpty()){
//       return
//     }
//     this.queue.shift()
//   }
//   reverse(){
//     const stack=[]
//     while(this.queue.length){
//       stack.push(this.queue.dequeue())
//     }
//     while(stack.length){
//       this.queue.enqueue(stack.pop())
//     }
//   }
//   deletMiddle(){
//     let mid=Math.floor(this.queue.length/2)
   
//   while(this.queue.length){
//     let currentIdx=0
//     if(currentIdx==mid){
//       this.queue.dequeue()
//     }else{
//       this.queue2.enqueue(this.queue.dequeue())
//     }
//     currentIdx++
//   }
//   while(this.queue2.length){
//     this.queue.enqueue(this.queue2.dequeue())
//   }
// }

// }

//**************binary search****** */
// function binarySearch(arr,target){
//   quickSort(arr)
//   console.log(arr);
  
//   let start=0;
//   let end=arr.length-1
//   while(start<end){
//     let mid=Math.floor((start+end)/2)
//     if(arr[mid]==target){
//       return mid
//     }else if(arr[mid]<target){
//       start=mid+1
//     }else {
//       end=mid-1
//     }
//   }
  
// }
// function quickSort(arr,lb=0,ub=arr.length-1){
//   if(lb<ub){
//     let loc=partition(arr,lb,ub)
//     quickSort(arr,lb,loc-1)
//     quickSort(arr,loc+1,ub)
//   }

  
// return arr
// }
// function partition(arr,lb,ub){
//   let start=lb
//   let end=ub
//   let pivot=arr[lb]
//   while(start<=end){
//     while(arr[start]<=pivot){
//       start++
//     }
//     while(arr[end]>pivot){
//       end--
//     }
//     if(start<end){
//       [arr[start],arr[end]]=[arr[end],arr[start]]
//     }
//   }
//   [arr[lb],arr[end]]=[arr[end],arr[lb]]
//   return end
// }
// console.log(binarySearch([8,5,6,7,2,1],7));

//*************hashtable*/
// class Hashtable{
//   constructor(size){
//     this.buckets=new Array(size)
//     this.size=size
//   }
//   hash(key){
//   key=key.toString()
//   let hash=0
//   for(let char of key){
//   hash=(hash+char.charCodeAt(0)*23)%this.size
//   }
//   return hash
//   }
//   set(key,value){
//   let index=this.hash(key)
//   if(!this.buckets[index]){
//     this.buckets[index]=[]
//   }
//   for(let i=0;i<this.buckets[index].length;i++){
//     if(this.buckets[index][i][0]==key){
//       this.buckets[index][i][1]=value;
//       return
//     }
//     this.buckets[index].push([key,value])
//   }
//   }
//   get(key){
//     let index=this.hash(key);
//     if(this.buckets[index]){
//       for(let i=0;i<this.buckets[index].length;i++){
//         if(this.buckets[index][i][0]==key){
//           return this.buckets[index][i][1]
//         }
//       }
      
//     }
      
//     return undefined
//   }
// }

//**merge sort
//selectionsort
// function selectionSort(arr){
//   for(let i=0;i<arr.length;i++){
//     let minIdx=i
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[j]<arr[minIdx]){
//         minIdx=j
//       }
//     }
//     if(minIdx!=i){
//       [arr[minIdx],arr[i]]=[arr[i],arr[minIdx]]
//     }
//   }
//   return arr
// }
function insertionSort(arr){
  for(let i=1;i<arr.length;i++){
    let current=arr[i]
    let j=i-1
    while(j>=0 && arr[j]>current){
      arr[j+1]=arr[j]
      j--
    }
    arr[j+1]=current

  }
  return arr
}
console.log(insertionSort([5,2,8,1,3,2]));

