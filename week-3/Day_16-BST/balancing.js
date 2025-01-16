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
  balance() {
    const nodes = [];
    this.storeInorder(this.root, nodes);
    this.buildBalancedBinaryTree(nodes, 0, nodes.length - 1);
  }
  storeInorder(root, nodes) {
    if (root) {
      this.storeInorder(root.left, nodes);
      nodes.push(root.val);
      this.storeInorder(root.right, nodes);
    }
  }

  buildBalancedBinaryTree(nodes, start, end) {
    //123;
    if (start > end) {
      return null;
    }
    let mid = Math.floor((start + end) / 2);
    let root = new TreeNode(nodes[mid]);
    root.left = this.buildBalancedBinaryTree(nodes, start, mid - 1);
    root.right = this.buildBalancedBinaryTree(nodes, mid + 1, end);

    return root;
  }
}
const tree = new BinarySearchTree();
tree.insert(50);
tree.insert(40);
tree.insert(60);

tree.insert(30);
tree.insert(45);
tree.insert(20);
tree.insert(11);
tree.insert(10);

tree.balance();
