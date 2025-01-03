
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
    search(root,value){
   
      
      if(!value || !root){
         return false
      }
      if(value<root.val){
        return this.search(root.left,value)
      }else if(value>root.val){
       return  this.search(root.right,value)
      }else {
         return true
      }
    }

}
const bst=new BinarySearchTree()
bst.insert(5)
bst.insert(4)
bst.insert(3)
bst.insert(9)
bst.insert(8)


console.log(bst.search(bst.root,9));

bst.display()