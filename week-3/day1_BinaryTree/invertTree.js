
var invertTree = function(root) {
   
  
    function helper(node){
        if(node){
            let right=node.right
           node.right=helper(node.left)
        node.left=helper(right)
        }
        return node
    }
    return helper(root)
};