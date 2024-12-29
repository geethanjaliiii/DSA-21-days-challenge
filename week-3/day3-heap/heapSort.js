//ALGORITHm
//1.we are given an array-->create a max heap->for that we need to use heapify with bottom up approach --
//-->so it will have o(n) complexity
//2.in thhe heap map-->we swap last and first element,reduce the heap size and heapify again,
//after removing the root each time we will get a sorted array

function heapSort(arr){
    let n=arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){//bottom to top
        heapify(arr,i,n)
    }
    //now we got heap
    for(let i=n-i;i>0;i--){
        
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,0,i)
    }
    return arr
}
function heapify(arr,i,n){
    let largest=i
    let left=2*i+1
    let right=2*i+2
    if(left<n && arr[left]>arr[largest]){
        largest=left
    }
    if(right<n && arr[right]>arr[largest]){
        largest=right
    }
    if(largest!=index){
        [arr[i],arr[largest]]=[arr[largest],arr[i]]
        heapify(arr,largest)
    }
}