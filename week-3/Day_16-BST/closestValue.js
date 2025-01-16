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
  insert(value) {
    this.root = this.inserthelper(this.root, value);
  }
  inserthelper(root, value) {
    if (!root) {
      return new TreeNode(value);
    }
    if (value < root.val) {
      root.left = this.inserthelper(root.left, value);
    } else if (value > root.val) {
      root.right = this.inserthelper(root.right, value);
    }
    return root;
  }
  closestValue(value) {
    let root = this.root;
    let closest = root.val;
    let helper = (root, value) => {
      if (!root) return closest;

      //each time update closes
      if (Math.abs(root.val - value) < Math.abs(closest - value)) {
        closest = root.val;
      }
      if (value < root.val) {
        return helper(root.left, value);
      } else if (value> root.val) {
        return helper(root.right, value);
      } else {
        return root.val;
      }
    };
    return helper(root, value);
  }
}
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(20);
tree.insert(30);

console.log(tree.closestValue(33));
