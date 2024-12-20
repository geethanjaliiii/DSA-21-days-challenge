//approach1-BRUTEFORCE APPROACH
const twoSum1=(arr,target)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==target){
                return [i,j]
            }
        }
    }
}
console.log(twoSum1([1,4,5,2],9));

//USING OBJECTS
//1.initialize an empty obj
//2.adding indexing as value to the key(element)
//3.check if target-cureent element exist ,return that index,current index
//else,append currend index to current element

//eg,arr[1,8,4,5]
//target 6
//obj[1]=0
//{'1':0,'8':1,'4':2,'5':return[0,3]}
const twoSum3=(arr,target)=>{
   let obj={};
   for(let i=0;i<arr.length;i++){
    if(obj[target-arr[i]]>=0){
        return [obj[target-arr[i]],i]
    }else{
        obj[arr[i]]=i
    }
   }
}
console.log(twoSum3([1,8,4,5],6));
