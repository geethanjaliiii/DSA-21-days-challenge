class TreeNode{
    constructor(data){
        this.val=data;
        this.right=null;
        this.left=null;
    }

}
class BinaryTree{
    constructor(){
        this.root=null
    }
    insert(data){
        const newNode=new TreeNode(data)
        if(!this.root){
            this.root=newNode
            return
        }
        let queue=[this.root]
          while(queue.length){
            const temp=queue.shift()
            if(!temp.left){
                temp.left=newNode;
                break;
            }else{
                queue.push(temp.left)
            }

            //right
            if(!temp.right){
                temp.right=newNode;
                break;
            }else{
                queue.push(temp.right)
            }
          }
    }
    inorder(node=this.root){
        if(!node){
            return
        }
        
        
        this.inorder(node.left);
        console.log(node.val);
        this.inorder(node.right)
    }
    search(){
        
    }
}
const binaryTree =new BinaryTree()
binaryTree.insert(1)
binaryTree.insert(2)
binaryTree.insert(3)
binaryTree.insert(4)

binaryTree.inorder()