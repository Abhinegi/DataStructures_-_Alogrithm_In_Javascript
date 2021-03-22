function Node(num,left,right){
    this.num = num;
    this.left=left;
    this.right= right;
}

function createBinaryTree(){
    root = new Node(2,new Node(3,new Node(2,null,null),new Node(1,null,null)), new Node(5,new Node(6,null,null),new Node(10,null,null)));
    return root;
}

function findSumInTree(root,sum){
    if(root==null && sum!=0)
        return false;
    if(sum==0)
        return true;
    else {
        return findSumInTree(root.left,sum-root.num) || 
                findSumInTree(root.right,sum-root.num)
    }    
}

function checkSum(){
    var root = createBinaryTree();
    console.log("Sum exist in tree: ",findSumInTree(root,8)) //sum not exist
    console.log("Sum exist in tree: ",findSumInTree(root,6)) //sum exist
}

checkSum();
