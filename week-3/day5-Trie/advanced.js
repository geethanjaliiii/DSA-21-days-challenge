class TrieNode{
    constructor(){
        this.children={}
        this.isEndOfWord=false
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node.children[char] ){
                node.children[char]=new TrieNode()
            }
            node=node.children[char]
        }
        node.isEndOfWord=true
    }
//ball
//balt
    autoComplete(prefix){
      let node=this.root;
      let result=[]
     //reach till end of prefix
        for(let char of prefix){
            node=node.children[char]
        }
        
      function getWords(node,word=prefix){
        //base case
        if(node.isEndOfWord){
            result.push(word)
        }

        //recursive
        for(let char in node.children){//
            getWords(node.children[char],word+char)
        
        }
      }
      //helper function to get words
      getWords(node)
      return result
    }

  
}
const trie =new Trie()
trie.insert('ball')
trie.insert('bat')
trie.insert('bathroom')
console.log(trie.autoComplete('bat'));
