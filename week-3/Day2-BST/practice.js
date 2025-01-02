class TreeNode{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null
    }
    insert(data){

        this.root = this.insertRecursevely(this.root,data)
     
    }
    insertRecursevely(node,value){
        if(!node){
            return new TreeNode(value)
        }
        if(value<node.val){
            this.insertRecursevely(node.left,value)
        }else if(value>node.val){
            this.insertRecursevely(node.right,value)
        }
        return node
    }
    dfsIterative(node){
        let stack=[node]
        let result=[]
        while(stack.length){
          let curr=  result.pop()
          result.push(curr.val)
          //push right to stack first so left will be processed fist
          stack.push(curr.right)
          stack.push(curr.left)
        }
    }
}