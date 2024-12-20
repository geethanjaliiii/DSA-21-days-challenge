function linearSearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}
function binarySearch(arr, key) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === key) return mid;
    else if (arr[mid] < key) {
      left = mid + 1;
    } else if (arr[mid] > key) {
      right = mid - 1;
    }
  }
  return -1;
}

function binaryRecursion(arr,key){
   function helper(left,right){
     if(left>right) return -1
     let mid=Math.floor((left+right)/2)
     if(arr[mid]==key)return mid
     else if(arr[mid]<key){
        return helper(mid+1,right)
     }else {
        return helper(left,mid-1)
     }
    
   }
  return helper(0,arr.length-1)
}
console.log(binaryRecursion([2,3,5,6,6,8],8));
