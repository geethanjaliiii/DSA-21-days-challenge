function mergeSort(arr){
    //base case return last element 
    if(arr.length<=1) return arr
    let mid=Math.floor(arr.length/2)

    let left=mergeSort(arr.slice(0,mid))
    let right=mergeSort(arr.slice(mid))
 
    return merge(left,right)//return to original aaray
}
function merge(left,right){
    let sortedArr=[]
    let i=0;
    let j=0
   while(i<left.length && j<right.length){
    if(left[i]<right[j]){
        sortedArr.push(left[i++]) 
     }else{
         sortedArr.push(right[j++])
     }
   }
   //also pushing already sorted left and right(remaining elements)
   for(;i<left.length;i++){
    sortedArr.push(left[i++])
   }
   for(;j<right.length;j++){
    sortedArr.push(j++)
   }
    return sortedArr
}
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));

// Take an example array: [38, 27, 43, 3, 9, 82, 10]. Here's what happens step-by-step:

// 1. First mergeSort([38, 27, 43, 3, 9, 82, 10]) is called.
// It splits into left = [38, 27, 43] and right = [3, 9, 82, 10].
// 2. Recursively resolve mergeSort([38, 27, 43]) (the left half).
// Split into left = [38] and right = [27, 43].
// 3. Recursively resolve mergeSort([27, 43]) (right side of [38, 27, 43]).
// Split into left = [27] and right = [43].
// 4. Base case is reached:
// mergeSort([27]) returns [27].
// mergeSort([43]) returns [43].
// 5. Merge happens:
// merge([27], [43]) returns [27, 43].
// 6. Merge continues:
// Now merge([38], [27, 43]) returns [27, 38, 43].
// 7. After all left-side recursive calls are resolved, start on mergeSort([3, 9, 82, 10]) (right side of the original array).
// Process this in the same way: left first, then right, and finally merge.
// Final Steps
// Once both left and right sides are resolved, merge them:
// merge([27, 38, 43], [3, 9, 10, 82]).

// Complexity Analysis of Merge Sort:
// Time Complexity:
// Best Case: O(n log n), When the array is already sorted or nearly sorted.
// Average Case: O(n log n), When the array is randomly ordered.
// Worst Case: O(n log n), When the array is sorted in reverse order.
// Auxiliary Space: O(n), Additional space is required for the temporary array used during merging.
// Applications of Merge Sort:
// Sorting large datasets
// External sorting (when the dataset is too large to fit in memory)
// Inversion counting
// Merge Sort and its variations are used in library methods of programming languages. For example its variation TimSort is used in Python, Java Android and Swift. The main reason why it is preferred to sort non-primitive types is stability which is not there in QuickSort. For example Arrays.sort in Java uses QuickSort while Collections.sort uses MergeSort.
// It is a preferred algorithm for sorting Linked lists.
// It can be easily parallelized as we can independently sort subarrays and then merge.
// The merge function of merge sort to efficiently solve the problems like union and intersection of two sorted arrays.
// Advantages of Merge Sort:
// Stability : Merge sort is a stable sorting algorithm, which means it maintains the relative order of equal elements in the input array.
// Guaranteed worst-case performance: Merge sort has a worst-case time complexity of O(N logN) , which means it performs well even on large datasets.
// Simple to implement: The divide-and-conquer approach is straightforward.
// Naturally Parallel : We independently merge subarrays that makes it suitable for parallel processing.
// Disadvantages of Merge Sort:
// Space complexity: Merge sort requires additional memory to store the merged sub-arrays during the sorting process.
// Not in-place: Merge sort is not an in-place sorting algorithm, which means it requires additional memory to store the sorted data. This can be a disadvantage in applications where memory usage is a concern.
// Slower than QuickSort in general. QuickSort is more cache friendly because it works in-place.