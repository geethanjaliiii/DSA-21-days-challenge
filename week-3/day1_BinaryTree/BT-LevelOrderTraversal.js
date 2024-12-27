//Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

//Input: root = [3,9,20,null,null,15,7]
//Output: [[3],[9,20],[15,7]]

var levelOrder = function (root) {
    let result = []
if (!root) return result

let queue = [root]
while (queue.length) {
    let level = []
    let queLen = queue.length //storing current level length safely
    for (let i = 0; i < queLen; i++) {
        let currentNode = queue.shift()
        level.push(currentNode.val)
        if (currentNode.left) queue.push(currentNode.left)
        if (currentNode.right) queue.push(currentNode.right)
    }
    result.push(level)
}
return result
};