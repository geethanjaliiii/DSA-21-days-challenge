class TreeNode {
    constructor(data) {
      this.val = data;
      this.left = null;
      this.right = null;
    }
  }
  class BinaryTree {
    constructor() {
      this.root = null; //initially the tree is empty
    }
    insert(value){
        this.root=this.insertByRecursion(this.root,value)
    }
    insertByRecursion(node,value){
         if(!node) return new TreeNode(value)//this.root becomes new node in null node

         //duplicates not allowed => returned previous root itself as root
         if(value===node.val){
            return node //
         }
         if(value<node.val){
           node.left= this.insertByRecursion(node.left,value)//modifying the left side of tree
         }else{
          node.right=  this.insertByRecursion(node.right,value)
         }
        return node  //return the changed or unchanged node
    }
    inorder(node=this.root){
        if(!node) return 
        if(node.left) this.inorder(node.left)
        console.log(node.val);
        if(node.right) this.inorder(node.right)
    }
    search(node,key){
       
        if(!node) return false
        if(key==node.val) return true
        if(key<node.val) return this.search(node.left,key)
         return this.search(node.right,key)    
    }
    search2(key){
        let current=this.root
        
        while(current){
            if(current.val==key) return true
            else if(key<current.val){
                current=current.left
            }else{
                current=current.right
            }
        }
        return false
    }

}
const tree=new BinaryTree()
tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.inorder()
console.log(tree.search2(50));

console.log(tree.search(tree.root,35));
