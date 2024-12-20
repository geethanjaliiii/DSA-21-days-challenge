function selectionSort(arr){
    let n=arr.length
    for(let i=0;i<n-1;i++){
        let minIdx=i;
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIdx]){
                minIdx=j
            }
        }//after checking all elements and findig minIdx we swap
        if(minIdx!=i){
            [arr[i],arr[minIdx]]=[arr[minIdx],arr[i]]
        }
    }
    return arr
}
console.log(selectionSort([4,9,1,7,3]));
//Time Complexity
//for any of the case both of these for loops will run-o(n^2) for 3 cases
 //space complexity-o(1) in-place
