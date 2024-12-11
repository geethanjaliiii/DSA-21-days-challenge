//APPROACH 1

function febinocci1(n){
    //0,1,1,2,3,5,8..
    //f(n)=f(n-1)+f(n-2)
 let arr=[0,1]
 for(let i=2;i<=n;i++){
    arr.push(arr[i-1]+arr[i-2])
 }
 return arr[n]
}
console.log(febinocci1(5));

//APPROACH 2-RECCUSION

const febinocci2=(n)=>{
    if(n<2) return n
return febinocci2(n-1)+febinocci2(n-2)
}
console.log(febinocci2(5));
