
var reverseString = function(s) {
    //    let left=0;
    //    let right=s.length-1
    //    while(left<right){
    //     [s[left],s[right]]=[s[right],s[left]]
    //     left++;
    //     right--
    //    }
    //    return s
    
    //with recusrion
    const helper=(left,right)=>{
        if(left>=right) return
        [s[left],s[right]]=[s[right],s[left]]
        helper(left+1,right-1)
    }
    helper(0,s.length-1)
    };