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
    // insertByRecursion(node,value){
    //      if(!node) return new TreeNode(value)//this.root becomes new node in null node

    //      //duplicates not allowed => returned previous root itself as root
    //      if(value===node.val){
    //         return node //
    //      }
    //      if(value<node.val){
    //        node.left= this.insertByRecursion(node.left,value)//modifying the left side of tree
    //      }else{
    //       node.right=  this.insertByRecursion(node.right,value)
    //      }
    //     return node  //return the changed or unchanged node
    // }
    //with iteration
    insertByIteration(value){
        
        let current=this.root
        while(true){
            if(value<current.val){
                if(current.left==null){
                    current.left=new TreeNode(value);
                    break;
                }else{
                  current=current.left
                }
                
            }else if(value>current.val){
                if(current.right==null){
                    current.right=new TreeNode()
                }else{
                    current=current.right
                }
            }else{
                //duplicates not allowed
                break
            }
        }
      
    }
    inorder(node=this.root){
        if(!node) return 
        if(node.left) this.inorder(node.left)
        console.log(node.val);
        if(node.right) this.inorder(node.right)
    }
}
const tree=new BinaryTree()
tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.inorder()