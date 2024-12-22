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