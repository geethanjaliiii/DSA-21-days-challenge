class TreeNode {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    this.root = this.insertByRecursion(this.root, data);
  }
  insertByRecursion(node, value) {
    if (!node) {
      return new TreeNode(value);
    }
    if (value < node.val) {
      node.left = this.insertByRecursion(node.left, value);
    } else if (value > node.val) {
      node.right = this.insertByRecursion(node.right, value);
    }
    return node; //return changed or unchanged node(duplicates not allowed)
  }

  delete(value) {
    this.root = this.deleteRecursively(this.root, value);
  }
  deleteRecursively(node, value) {
    //base case
    if (node == null) return null;

    //1/find node to be deleted
    if (value < node.val) {
      node.left = this.deleteRecursively(node.left, value); //in the end we are returning subroots to this node.left/right
    } else if (value > node.val) {
      node.right = this.deleteRecursively(node.right, value);
    } else {
      //     50
      //     /\
      //   40   60
      // 30 45
      //2.found node-handle 3 cases

      //1.leaf node(0 child)
      //or
      //2.//only one child
      if (node.left == null) {
        return node.right;
      } else if (node.right == null) {
        return node.left;
      }
      //case 3 : both childs present
      //find inorder successor from right subtree(min value in right subtree of that node)

      node.val = this.inorderSuccessor(node.right); //replaced value
      console.log('hi',node.val);
      
      //find the minElem in right subree and remove it
     node.right= this.deleteRecursively(node.right, node.val); //we cant simply delete as it might be connected to other subtrees
    }
    return node;
  }
  inorderSuccessor(node) {
    while (node.left) {
      this.inorderSuccessor(node.left);
    }
    return node.val;
  }
  inorder(node = this.root) {
    if (node) {
      if (node.left) this.inorder(node.left);
      console.log(node.val);
      if (node.right) this.inorder(node.right);
    }
  }
}
const tree = new BinarySearchTree();
tree.insert(50);
tree.insert(40);
tree.insert(60);

tree.insert(30);
tree.insert(45);
tree.inorder(48)
console.log("1st");
tree.delete(40);
tree.inorder()