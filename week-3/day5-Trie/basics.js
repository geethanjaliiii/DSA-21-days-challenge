class TrieNode{
    constructor(){
        //each node can have multiple children
        this.children={}
        this.isEndOfWord=false;
    }
}
class Trie{
    constructor(){
        this.root=new TrieNode()
    }
    //insert
    insert(word){
        let node=this.root;//we start from root node
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }
            //now move to next node
            node=node.children[char]
        }
        //after the loop ends we mark the last element with end of word
        node.isEndOfWord=true
    }
    search(word){
        let node =this.root;
        for(let char of word){
            if(!node.children[char]){
                //if that char is not present return
                return false
            }
            //if found move forward
            node=node.children[char]
        }
        //after completing loop we need to check if the last char we found is endof word
        return node.isEndOfWord
    }
    startswith(prefix){
        let node =this.root;
        for(let char of prefix){
            if(!node.children[char]){
                //if that char is not present return
                return false
            }
            //if found move forward
            node=node.children[char]
        }
       
        return true //if we can traverse the node its prefix
    }
}