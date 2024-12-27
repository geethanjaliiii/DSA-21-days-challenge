//INSERTION
//=>if root is empty add to root
//=>traverse from left to right find for an empty node
//=>just like bfs-add to left if left in that level is empty else if right in that level is empty add new node to right
//=>else push to queue


class TreeNode{
    constructor(data){
        this.val=data;
        this.left=null;
        this.right=null
    }
}

class BinaryTree{
    constructor(){
        this.root=null
    }
    insert(data){
        const newNode=new TreeNode(data)
        //if root is not presenr
        if(!this.root){
            this.root=newNode
            return
        }
        //traverse till we find an empty node--bfs
        let queue=[this.root]
        while(queue.length){
            let temp=queue.shift()
            if(temp.left===null){
                temp.left=newNode;
                break;//no need to proceed
            }else{
                queue.push(temp.left)
            }
            //checking right in that level
            if(temp.right==null){
                temp.right=newNode
                break
            }else{
                queue.push(temp.right)
            }
        }
    }
    //to display
    inorder(node=this.root){
        if(!node) return 
        if(node.left) this.inorder(node.left)
        console.log(node.val);
          if(node.right) this.inorder(node.right)
    }
}
const tree=new BinaryTree()
tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.inorder()