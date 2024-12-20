//bubble sort goes throgh many laps and put aside the largest int in the end after each lap
//it have a time complexity of o(n^2)
// After the first pass, the largest element will be at the end of the list.
// Repeat the process, but exclude the last sorted element, as it is already in its correct position.(j=0;j<n-i-1)
// In the first lap j is till 5(n-0-1)
// So that 6 th element will be the largest no need to compare it
// When i=1;j<n-1-1⇒4
// Continue until no swaps are needed.

function bubbleSort(arr){
    let n=arr.length;
    let swapped ;// to break early if no swapping occurs 
    for(let i=0;i<n-1;i++){
       swapped=false;//currently no swapping occured
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                swapped=true
            }
        }
        console.log(arr);
        if(!swapped){//the array is alreadysorted
            break;
        }
    }
    return arr
}

console.log(bubbleSort([4,8,10,9,7,1]));
