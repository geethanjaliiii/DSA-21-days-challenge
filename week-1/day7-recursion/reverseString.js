//reverse string hello==>olleh
//1.With builtin
function reverseString(s){
    return s.split('').reverse().join('')
}
//2.without biuilin
function reverseString1(string){
    let s=string.split('')
    let start=0;
    let end=s.length-1
   while(start<end){
    
    [s[start],s[end]]=[s[end],s[start]]
    start++
    end--
    console.log(start,end,s);
    
   }
   return s.join('')
}
//3.with recusion
function reverseString2(s){
    // reverseString2('hello')=>reverseString1('ello')+h
    // reverseString2('ello')=>reverseString1('llo')+e
    // reverseString2('llo')=>reverseString1('lo')+l
    // reverseString2('lo')=>reverseString1('o')+l
    // reverseString2('o')=>reverseString1('')+o
    // reverseString2('')=>''

    if(s===''){
        //base case
       return ''
    }
    return reverseString2(s.substring(1))+s.charAt(0)//substring will remove first element
}

console.log(reverseString("hello"));
console.log(reverseString2("hello"));//elloh==>llohe
function reverseStringg(str){
    if(str==''){
        return ''
    }
    return reverseStringg(str.substring(1))+str[0]
}
console.log(reverseStringg("anju"));