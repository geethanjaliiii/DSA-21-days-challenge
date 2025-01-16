//in this qn ,BEfore deleting, we need to ensure that the node has no children left and the node is not end of another word

//step 1. we have a helper function ,we need to check the bese case (we have reached full depth)

//when we reach the last word ,we should unmark it as isendofword, then if its valid for deleting return true

class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  //insert
  insert(word) {
    let node = this.root; //we start from root node
    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      //now move to next node
      node = node.children[char];
    }
    //after the loop ends we mark the last element with end of word
    node.isEndOfWord = true;
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
  //if we are iterating we first delete the last element then check subsequent elements
  delete(word) {
    function deleteHelper(node, word, depth) {
      if (!node) return false; //if node doesnt exist means that character not present
      //*********base case***************
      if (depth == word.length) {
        //unmark isendofstring as its not valid anymore
        if (node.isEndOfWord) node.isEndOfWord = false;

        //to ensure to delete that node,there shouldnt be any children
        return Object.keys(node.children).length === 0;
      }

      //*************************recursive case****************************************
      let char = word[depth];
      let shouldDelete = deleteHelper(node.children[char], word, depth + 1);
      if (shouldDelete) {
        delete node.children[char]; //delete it
      }

      //for backtracking :condition to check eligibilty for deleting

      //1.no childrens
      //2..that node shouldnot be end of another word
      return Object.keys(node.children).length === 0 && !node.isEndOfWord;

   
    }

    deleteHelper(this.root, word, 0);
  }
 
}

const trie=new Trie()
trie.insert("cat")
trie.insert("cattle")
trie.insert("car")
trie.delete('cat')
console.log(trie.search('cat'));
