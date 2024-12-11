//approach 1
const isAnagram=(s,t)=>{
    if(s.length!=t.length) return false
    s=s.split().sort().join('')
    t=t.split().sort().join('')
    return s===t
}
console.log(isAnagram('cat','cat'));
//approach 2
const isAnagram2=(s,t)=>{
let obj1={};
let obj2={}
for(let i=0;i<s.length;i++){
    obj1[s[i]]=(obj1[s[i]]||0)+1
    obj2[t[i]]=(obj2[t[i]]||0)+1

}
for(const key in obj1){
    if(obj1[key]!==obj2[key]){
        return false
    }
}
return true
}
console.log(isAnagram2("cat",'rat'));
