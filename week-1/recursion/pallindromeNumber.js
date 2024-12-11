const palindrome=(num)=>{
    let rev=0
    let n=num
    if(num<0){
        return false
    }
    while(num>0){
        console.log(num);
        
        rev=rev*10+num%10;
        num=Math.floor(num/10)
        console.log('new num',num);
        
    }
    return n===rev
    //121
    //rev=(3*10+num%10)*10+n%10
    //num=math.flo(n/10)1
    //3*10
   
}
console.log(palindrome(121));
