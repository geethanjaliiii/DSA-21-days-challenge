   // Function to rotate an array by d elements in counter-clockwise direction.
   function rotateArr(arr, d) {
    const size=arr.length
    if(d>size){
        d=d%size
    }
    const rotated=arr.splice(0,d)//o(n)
    arr.push(...rotated) //o(n)
    //loop arra
return arr
    
}

//complexity=> o(n)
console.log(rotateArr([1,2,3,4,5],2));

//without builin-without temp [1,2,3,4,5]==>[ 3, 4, 5, 1, 2 ]
//1.rotate [2,1] for d elementd as subarray

//2.rotate [5,4,3]  n-d element as subarray

//arr==>[2,1,5,4,3]

//3.rotate full array [3,4,5,1,2]

const optimisedRotate=(arr,d)=>{
    let n=arr.length
    if(d>n){
      d=d%n
    }
  rotate(arr,0,d-1)
  rotate(arr,d,n-1)
  rotate(arr,0,n-1)
  return arr
}
const rotate=(arr,start,end)=>{
    while(start<end){
    let temp=arr[start]
    arr[start++]=arr[end];
    arr[end--]=temp
    }
      
  }
  console.log(optimisedRotate([1,2,3,4,5],2));
  