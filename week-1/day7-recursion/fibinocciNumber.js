//WITHOUT RECUSION
const fibinocci=(n)=>{
 
    let arr=[0,1]
    for(let i=2;i<=n;i++){
        arr.push(arr[i-1]+arr[i-2])
    }
    return arr[n]
}
console.log(fibinocci(5));

//WITH RECUSRION
const fibi=(n)=>{
    //base case
    if(n<2){
        return n
    }
    return fibi(n-1)+fibi(n-2)
}
console.log(fibi(5));
