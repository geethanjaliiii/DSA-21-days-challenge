const rangeOfNums=(start,end)=>{
  
    if(start>end){
        return [] //base case
    }
    return [start,...rangeOfNums(start+1,end)]
}

console.log(rangeOfNums(1,4));
