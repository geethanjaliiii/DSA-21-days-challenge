class TrieNode{
    constructor(){
       this.children={}
       this.isEndOfWord=false
    }
}
class Trie{
constructor(){
    this.root=new TrieNode();

}
insert(word){
    let node=this.root;
    for(let char of word){
        if(!node.children[char]){
            node.children[char]=new TrieNode()
        }
        node=node.children[char]
    }
    node.isEndOfWord=true
    
}
search(prefix){
let words=[]
let node=this.root
for(let char of prefix){
    if(!node.children[char]){
        return
    }
    node=node.children[char]
}
let getWord=(node,word=prefix)=>{
    
    if(node.isEndOfWord){
      words.push(word)
    }
    for(let char in node.children){
      this.getWord(node.children[char],word+char)
    }
  }
getWord(node)
return words
}

delete(word){
    let depth=0
   let deletehelper=(node,depth)=>{
//*base case
if(depth=word.length){
    if(node.isEndOfWord) node.isEndOfWord=false //unmarking
    return Object.keys(node.children).length===0
}

//recusrive case
let char=word[depth]
let shouldDelete=deletehelper(node.children[char],depth+1)
if(shouldDelete){
    delete node.children[char]
}
return (Object.keys(node.children).length==0&& !node.isEndOfWord)
    }
    deletehelper(this.root,0)
}

}