// First we find the smallest element and swap it with the first element. This way we get the smallest element
//  at its correct position.
// Then we find the smallest among remaining elements (or second smallest) and swap it with the second element.
// We keep doing this until we get all elements moved to correct position.
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

// Advantages of Selection Sort
// Easy to understand and implement, making it ideal for teaching basic sorting concepts.
// Requires only a constant O(1) extra memory space.
// It requires less number of swaps (or memory writes) compared to many other standard algorithms. Only cycle sort beats it in terms of memory writes. Therefore it can be simple algorithm choice when memory writes are costly.

// Disadvantages of the Selection Sort
// Selection sort has a time complexity of O(n^2) makes it slower compared to algorithms like Quick Sort or Merge Sort.
// Does not maintain the relative order of equal elements which means it is not stable.

// Applications of Selection Sort
// Perfect for teaching fundamental sorting mechanisms and algorithm design.
// Suitable for small lists where the overhead of more complex algorithms isn’t justified and memory writing is costly as it requires less memory writes compared to other standard sorting algorithms.
// Heap Sort algorithm is based on Selection Sort.