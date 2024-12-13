let str='geetha is beautiful'
let str2=`hii
geetha
is 
powerfull`//it doestn throw error in pritted steps

console.log(str[2]);
console.log(str.charAt(3));

//in js strings are not mutable
str[2]='b'
console.log(str[2]);


//USING REPLACE
console.log(str.replace('geetha','geethanjali'));//geethanjali is beautiful
//BUT ONLY RETURNS A NEW STRING DOESNT MUTATE
console.log(str);//geetha is beautiful
console.log(str.replace('e','m'));//gmetha is beautiful -replace only first indtsnve of thta character
//it is case sensitive
console.log(str.replaceAll('e','m'));//gmmtha is bmautiful
console.log(str.concat("hii"));
console.log(str.trim());

//indexOf-substring to search for in a string
//WE CAN SEARCH CHAR AND WORD
console.log(str.indexOf('gee'));//0
console.log(str.indexOf('geetha'));//0
console.log(str.indexOf('is'));//7
console.log(str.indexOf('t'));//3
console.log(str.lastIndexOf('t'));//14

console.log(str.startsWith('g'));//true
console.log(str.startsWith('G'));//false

console.log(str.substring(12));
console.log(str.slice(2,6));

//conver to string
console.log(String(undefined));
let obj={name:"geetha"}
//wrong
console.log(String(obj));//[object Object]
console.log(JSON.stringify(obj));//{"name":"geetha"}

console.log(str.toUpperCase());
console.log('A'==='a');
//ascii==>65-95 A-Z
//97-112=>a-z

console.log(str.charCodeAt(0));
console.log(String.fromCharCode(65));
// 103
// A
//comparing
let strr1='apple'
let strr2='banana'
console.log(strr1.localeCompare(strr2));//-1
console.log(str.includes("geetha"));//true

function nonRepeatingChar(s) {
    let count={};
    for(let i=0;i<s.length;i++){
        count[s[i]]=(count[s[i]]||0)+1;
        
    }
    console.log(count);
    
    for(let i in count){
       if(count[i]==1){
        return i
       }
    }
    // code here
}
console.log(nonRepeatingChar('geeksforgeeks'));


console.log(typeof('5'-'0'));//returns number















