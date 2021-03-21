/*
Given a rod of length n inches and an array of prices that contains prices of all pieces of size smaller than n. 
Determine the maximum value obtainable by cutting up the rod and selling the pieces.
For example, if length of the rod is 8 and the values of different pieces are given as following, 
then the maximum obtainable value is 22 (by cutting in two pieces of lengths 2 and 6) 

length   | 1   2   3   4   5   6   7   8  
--------------------------------------------
price    | 1   5   8   9  10  17  17  20

And if the prices are as following, then the maximum obtainable value is 24 (by cutting in eight pieces of length 1) 

length   | 1   2   3   4   5   6   7   8  
--------------------------------------------
price    | 3   5   8   9  10  17  17  20
*/


const readline = require("readline").createInterface({input:process.stdin,output:process.stdout});


var length=[],cost=[], rodLength;
readline.question("Enter the length array : ",data=>{
    length =  data.split(" ").map(data=>parseInt(data));
    readline.question("Enter the cost array : ",data=>{
        cost =  data.split(" ").map(data=>parseInt(data));
        readline.question("Enter the rod length : ",data=>{
            rodLength = parseInt(data);
            console.log("Maximum Rod Cutting Profit : " , calculateMaxProfit(length,cost,rodLength));    
            readline.close();
        });
    });
});


function calculateMaxProfit(length,cost,rodLength){
    var dp=new Array(rodLength+1);
    dp[0]=0;
    if(length[0]==1)
    dp[1]=cost[0];
    for(i=2;i<dp.length;++i){
        var maxSum =-1,pieceCost=-1;
        for(j=0;j<length.length;++j){
            if(length[j]>i)
                break;
            var rodPartSum =dp[length[j]] + dp[Math.abs(i-length[j])]    ;
            maxSum = max(rodPartSum, maxSum);
            if(i==length[j])
            pieceCost=cost[j]

        }
        maxSum=max(maxSum,dp[i-1]);
        if(pieceCost!=-1)
        maxSum =max(maxSum,pieceCost);
        dp[i]=maxSum;
    }
    return dp[rodLength];
}

function max(a,b){
    return a>b?a:b;
}

