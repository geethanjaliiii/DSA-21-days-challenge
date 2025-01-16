function swap(arr,i,j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function partion(arr, lb = 0, ub = arr.length - 1) {
  let pivot = arr[lb];
  let start = lb;
  let end = ub;
  while (start < end) {
    while (arr[start] <= pivot ) {
      start++;
    }
     while (arr[end] > pivot) {
      end--;
    } 
    //when both of the while loop stops
    //exchange start and end
     if (start < end) {
      swap(arr,start,end);
    }
  }
  swap(arr,lb,end);
  //now end is the position of new pivot
  return end;
  //continue quick soert in new partitions
}
function quickSort(arr, lb = 0, ub = arr.length - 1) {
  if (lb < ub) {
    let loc = partion(arr, lb, ub);
    console.log(arr);
    
    quickSort(arr, lb, loc - 1);
    quickSort(arr, loc + 1, ub);
  }
  return arr;
}
console.log(quickSort([2, 4, 48, 9, 6, 3]));
