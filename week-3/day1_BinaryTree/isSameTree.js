var isSameTree = function (p, q) {
    //1.first check if both nodes are null
    if (!p && !q) return true
    //2.sec check if anyone is null
    if (!p || !q) return false
    //check if values are different
    if(p.val!=q.val) return false

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
