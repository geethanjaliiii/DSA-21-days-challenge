function factorial(n){
 if(n==0){
    return 1
 }
    return n*factorial(n-1)
}
console.log(factorial(3));

function binarySearch(arr,key){
    let left=0;
    let right=arr.length-1
    while(left<=right){
      
        
        let mid=Math.floor((left+right)/2)
      
        if(arr[mid]===key) {
            return mid;}
        else if(arr[mid]<key){
           
            left=mid+1
        }
        else{
            right=mid-1
        }
        console.log(mid,left,right);
    }
}
console.log(binarySearch([1, 3, 4, 5, 6, 9, 11, 15, 18, 21, 25],15));

