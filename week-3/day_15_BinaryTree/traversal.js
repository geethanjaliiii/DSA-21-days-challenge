class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

//https://visualgo.net/en/bst- watch this first
//dfs
//preorder =>[root]->left-->right
//inorder=>  left-->[root]-->right
//post order =>left-->right-->[root]

//only order of root is changing
//here we are depth first searchinh-we search till we reach an end then do backtracking

class BinaryTree {
  constructor() {
    this.root = null; //initially the tree is empty
  }

  //inorder traversal: left-->root-->right
  inorder(node = this.root) {
    if (node) {
      this.inorder(node.left); //traverse the left subtree
      console.log(node.data); //visit the root
      this.inorder(node.right); //traverse the right subtree
    }
  }
  //preorder-root-->left-->right
  preorder(node = this.root) {
    if (node) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  //bfs--->processesing each levels ,
  //pushing values in eavh level-->we need a que to temp store the left and right
  //fist we enque root
  //enter a loop--> if queue is not empty ->we deque the first elem -->save to results-->and push left then right
  //then again deque first elememnt add its left and right
  //if root have childeren de

  //       1
  //     /   \
  //    2     3
  //   / \   / \
  //  4   5 6   7

  //     BFS Traversal Order:
  // 1 → 2 → 3 → 4 → 5 → 6 → 7

  // Step-by-Step Execution:
  // Start with the root node (1). Enqueue it: [1].
  // Dequeue 1, process it, and enqueue its children (2, 3): [2, 3].
  // Dequeue 2, process it, and enqueue its children (4, 5): [3, 4, 5].
  // Dequeue 3, process it, and enqueue its children (6, 7): [4, 5, 6, 7].
  // Dequeue 4, process it: [5, 6, 7].
  // Dequeue 5, process it: [6, 7].
  // Dequeue 6, process it: [7].
  // Dequeue 7, process it: [].
  bfs(root) {
    if(!root) return []
    let result=[]
    let queue=[root]
    while(queue.length){
        let currentNode=queue.shift()//removed paranent
        result.push(currentNode.data)//appending value of that level
        //adding children
       if(currentNode.left) queue.push(currentNode.left)
       if(currentNode.right) queue.push(currentNode.right)
    }
return result
  }
}

const tree = new BinaryTree();

tree.root = new TreeNode(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(3);
tree.root.left.left = new TreeNode(4);
tree.root.left.right = new TreeNode(5);
tree.root.right.left = new TreeNode(6);
console.log("inorder traversal");
tree.inorder();

console.log("preorder traversal");
tree.preorder();
console.log(tree.bfs(tree.root));
