class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const newNode = new Node(data);
    if (this.root == null) {
      this.root = newNode;
      return;
    }
    let queue = [this.root];
    while (queue.length) {
      let temp = queue.shift();
      if (temp.left == null) {
        temp.left = newNode;
        break;
      } else {
        queue.push(temp.left);
      }
      if (temp.right == null) {
        temp.right = newNode;
        break;
      } else {
        queue.push(temp.right);
      }
    }
  }
  search(node, key) {
    if (node === null) {
      return false;
    } //if root is empty or left or right is empty it returns false

    //dfs-pre order-->process current node->left->right
    if (node.val === key) {
      return true;
    }
    let left_res = this.search(node.left, key); //reach till last of left-->check if current node has val-->visit left or right
    //  will return true or false
    let right_res = this.search(node.right, key);

    //final result--combination of both result if anyone is true return true
    return left_res || right_res;
  }
  inorder(node = this.root) {
    if (!node) return;
    if (node.left) this.inorder(node.left);
    console.log(node.val);
    if (node.right) this.inorder(node.right);
  }
}
const tree = new BinaryTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
tree.insert(4);
tree.insert(5);
tree.inorder();
console.log(tree.search(tree.root,8));
