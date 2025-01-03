class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    this.root = this.insertRecursively(this.root, value);
  }
  insertRecursively(root, value) {
    if (!root) {
      return new TreeNode(value);
    }
    if (value < root.val) {
      root.left = this.insertRecursively(root.left, value);
    } else if (value > root.val) {
      root.right = this.insertRecursively(root.right, value);
    }
    return root;
  }

  validate(root = this.root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    console.log(root);
    if (root.val <= min || root.val >= max) {
      return false;
    }
    return (
      this.validate(root.left, min, root.val) &&
      this.validate(root.right, root.val, max)
    );
  }
}
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(4);
bst.insert(3);
bst.insert(2);
bst.insert(4);

console.log(bst.validate());
