function heapSort(arr){
    let n=arr.length
for(let i=Math.floor(n/2)-1;i>=0;i--){
    //bottom to to approach
    heapify(arr,i,n)
}
console.log(arr);

//move root to end
//reduce size of heap
for(let i=n-1;i>0;i--){
    [arr[0],arr[i]]=[arr[i],arr[0]]
    heapify(arr,0,i)
}
return arr
}
function heapify(arr,index,n){
    let largest=index;
    let left=2*index+1
    let right=2*index+2
    if(left<n && arr[left]>arr[largest]){
        largest=left
    }
    if(right<n && arr[right]>arr[largest]){
        largest=right
    }
    if(largest!=index){
        [arr[largest],arr[index]]=[arr[index],arr[largest]]
        heapify(arr,largest,n)
    }
}
//in heapify we first compare 2 childrens ,find largest ,swap
//then again heapify with index=largest
const array = [12, 11, 13, 5, 6, 7];
console.log("Original Array:", array);
console.log("Sorted Array:", heapSort(array));