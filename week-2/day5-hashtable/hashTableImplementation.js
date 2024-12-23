class HashTable{
    constructor(size){
       this.buckets=new Array(size);//bucket is an array of fixed size
       this.size=size
    }
    hash(key){
        let hash=0
        key=toString(key)
        for(let char of key){
            hash=(hash+char.charCodeAt(0)*23)%this.size
        }
        return hash;
    }
    //insert or update key-value pair
    set(key,value){
        //1.check if bucket is empty=>initialize an array
        //2.check if the same key already exist just update its value
        //3.if not push the key and value
        const index=this.hash(key)
        if(!this.buckets[index]) {
            this.buckets[index]=[]
        }
        for(let i=0;i<this.buckets[index].length;i++){
            if(this.buckets[index][i][0]==key){//key already exisy
               this.buckets[index][i][1]=value;
               return
            }
        }
        this.buckets[index].push([key,value])
    }
    //retrieve the value associated with it
    get(key){
   const index=this.hash(key)
    
       if(this.buckets[index]){
        for(let i=0;i<this.buckets[index].length;i++){
            if(this.buckets[index][i][0]==key){
             return this.buckets[index][i][1]
            }
        }
       }
      //if not found in bucket[index] or if the bucket[index] doesnt exist
      return undefined
    }
    remove(key){
        let index=this.hash(key);
        if(!this.buckets[index]){
            console.log("bucket is empty");
            return
        }
        for(let i=0;i<this.buckets[index].length;i++){
            if(this.buckets[index][i][0]===key){
                this.buckets[index].splice(i,1)
                return;
            }
        }
    }
    display(){
      this.buckets.forEach((bucket,index)=>{
        if(bucket && bucket.length>0){
            console.log(`${index}: ${JSON.stringify(bucket)}`);
        }
      })
    }
}
module.exports=HashTable
// let hash=new HashTable(5)
// hash.set('name','anju')
// hash.set('age',22)
// hash.set('name','Hari')//updating
// hash.display()
// console.log('hii');

// hash.remove('name')
// hash.display()
// console.log(hash.get('age'));

// Hash Table (Visualized as a Multidimensional Array):

// Index  | Bucket (Sub-Array for Chaining)
// ---------------------------------------
// 0      | []
// 1      | []
// 2      | []
// 3      | [["name", "Bob"], ["city", "Wonderland"]]
// 4      | []
// 5      | [["age", 25]]
// ...
// 49     | []
