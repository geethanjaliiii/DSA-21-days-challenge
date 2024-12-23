class HashTable{
    constructor(size){
        this.buckets=new Array(size);
        this.size=size;
    }
    set(key,value){
        let index=this.hash(key)
        if(!this.buckets[index]){
            this.buckets[index]=[]
        }
        for(let i=0;i<this.buckets[index].length;i++){
            if(this.buckets[index][i][0]===key){
                this.buckets[index][i][1]=value;
                return
            }
        }
        this.buckets[index].push([key,value])
    }
    get(key){
        let index=this.hash(key)
        if(this.buckets[index]){
            for(let i=0;i<this.buckets[index].length;i++){
                if(this.buckets[index][i][0]==key){
                    return this.buckets[index][i][1]
                }
            }
        }
        return undefined
    }
    hash(key){
        key=toString(key);
        let hash=0
        for(let char of key){
         hash=(hash+char.charCodeAt(0)*23)%this.size
        }
        return hash
    }
}
const hash=new HashTable(5)


function findLongestRepeatingLetter(s){
    let letter=''
    let max=0
for(let char of s){
const count=hash.get(char)||0
hash.set(char,count+1)
}
for(let char of s){
    let count=hash.get(char)
    if(count>1 && count>max){
        letter=char
        max=count
    }
}
console.log(max);

return letter
}
console.log(findLongestRepeatingLetter('helloyyyyy'));
