function removeVowels(str,index=0){
    if(str==''){
        return ''
    }
    let vowels='aeiou'
    if(vowels.includes(str[index].toLowercCase())){
        return removeVowels(str.slice(1))
    }else{
        return str[index]+removeVowels(str.slice(1))
    }
}
console.log(removeVowels('hEllo world'));
let result=''
for(let i=0;i<str.length;i++){
    if(!vowels.includes(str[i].toLocaleLowerCase())){
       str+= str[i]
    }
}
