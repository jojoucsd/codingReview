/*
Given an array of distinct positive int represent coin denominations and a single non-negative
integer n representing a  target amount of money, write a function that returns the number
of ways to make change for that target amount using the given coin denominations.

Note that an unlimited amount of coins is at your disposal
*/

numberOfWaysToMakeChange = (n , denoms) =>{
    const ways = new Array(n + 1).fill(0) // make and denomination array list
    ways[0] = 1 // set starting way

    for (let denom of denoms) {
        for(let amount = 1; amount < n+1; amount ++){
            if(denom <= amount){
                ways[amount] += ways[amount - denom]
            }
        }
    }
    return ways[n]
}
