function nextGreatest(nums1,nums2){
    let stack=[]
    let nextGreatestMap=new Map()
    for(let j=nums2.length-1;j>=0;j--){
        //looping from back so that only next of that number will be processes
        let current=nums2[j]
      
        
        while(stack.length!=0 && stack[stack.length-1]<=current){//need while loop to ensure all smaller elems are popped
            stack.pop()
        }
        console.log(stack);
        nextGreatestMap.set(current,stack.length>0?stack[stack.length-1]:-1)//if stack is not empty the top elem will be greatest next
        stack.push(current)
    }
    return nums1.map(num=>nextGreatestMap.get(num))
}
const nums1 = [4, 1, 2];
const nums2 = [1, 3, 4, 2];
console.log(nextGreatest(nums1,nums2));
