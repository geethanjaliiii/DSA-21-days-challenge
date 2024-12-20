function pushZerosToEnd(arr) {
  let index = 0;//index to track position to place non zero elements
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[index] = arr[i];
      index++;
    }
  }
  for (let i = index; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr
}
console.log(pushZerosToEnd([1,0,3,4,0,5,0,2]));
