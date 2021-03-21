var readline = require("readline").createInterface({input:process.stdin,output:process.stdout});

readline.question("Enter input array", data =>{
    var arr = data.split(" ").map(data=>parseInt(data));    
    var tree=[];
    console.log(arr)
    createSegmentTree(arr,tree,0,arr.length-1,0);
    console.log("Segment tree is : ",tree);
    readline.close();
});

//create a segment tree
function createSegmentTree(arr, tree,left,right,pos){
    if(left==right)
    {
        tree[pos]=arr[left]
        return tree[pos];
    }
   
    tree[pos] =  createSegmentTree(arr,tree,left,parseInt((left+right)/2),2*pos+1) +
        createSegmentTree(arr,tree,parseInt((left+right)/2)+1,right,2*pos+2);

    return tree[pos];
}
// 1 2 3 4 5 6 7

