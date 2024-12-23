const HashTable=require('./hashTableImplementation')
// Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add up 
// to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.


function twoSum(arr,target){
    const hash= new HashTable(arr.length)
for(let i=0;i<arr.length;i++){
    if(hash.get(target-arr[i])>=0){
        return[i,hash.get(target-arr[i])]
    }
hash.set(arr[i],i)
}

}
console.log(twoSum([1,2,8,9],3));
