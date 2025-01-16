
class TreeNode{
    constructor(data){
        this.val=data;
        this.left=null;
        this.right=null
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    //insert
    insert(data){
         if(!data){
            return
         }
         this.root=this.insertHelper(this.root,data)
    }
    insertHelper(root,value){
     if(!root){
        return new TreeNode(value)
     }
     if(value<root.val){
        root.left=this.insertHelper(root.left,value)
     }else if(value>root.val){
        root.right=this.insertHelper(root.right,value)
     }
     return root
    }
    display(root=this.root){
       if(root){
        this.display(root.left);
        console.log(root.val);
        this.display(root.right)
       }
    }
  delete(val){
   var helper=(root,val)=>{
 
      if(!root){
      return null
     //find value
     //if we got value==>check no of child 
     //swap
     //if two kids =>find inorder succesor
     //find and delete
     }
     if(val<root.val){
     root.left= helper(root.left,val)
     }else if(val>root.val){
      root.right=helper(root.right, val)
     }else{
      //found
      //if no child
      if(!root.left ){
          return root.right
      }else if(!root.right){
         return root.left
      }else{
         //two children
          node.val=this.inorderSuccessor(root.right)
      }
     }
   }
   helper(this.root,val)
  }
  inorderSuccessor(root){
   
while(root.left){
this.inorderSuccessor(root.left)
}
return root.val

  }

}
const bst=new BinarySearchTree()
bst.insert(5)
bst.insert(4)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(1)
console.log(bst.maxDepth());



