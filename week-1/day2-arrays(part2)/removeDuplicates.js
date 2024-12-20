//remove duplicates from sorted array
let arr1=[1,1,2]
let arr2=[0,0,1,1,1,2,2,3,3,4]
           

const removeDuplicates=(arr)=>{
    let index=1
    //fiirst elemet is always unique
    for(let i=1;i<arr.length;i++){
        if(arr[i]!=arr[i-1]){//found a unique
            arr[index]=arr[i]
           index++
        }
    }
    return index

  
}                              
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
