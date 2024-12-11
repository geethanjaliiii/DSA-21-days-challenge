const multiply=(arr)=>{
    let product=1
    for(let i=0;i<arr.length;i++){
        return product*arr[i]
    }
}
//instead
//let arr=[1,2,3,4] ==>4*3*2*1

const multiply1=(arr)=>{
    if(arr.length==0){
        return 1
    }else{
        console.log(arr);
        
        return arr[arr.length-1]*multiply1(arr.splice(0,arr.length-1))//at some point the length became 0 so we should check condition
    }

}
console.log(multiply1([1,2,3,4]));
