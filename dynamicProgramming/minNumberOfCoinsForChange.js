/*
Given an array of positive int representing coin denominations and a single non-negative int
n representing a target amount of money, write a function that returns the smallest number of coins aneeded to make change for (to
sum up to) that target amount using the given coin denominations.

Note that you have access to an unlimited amount of coins. In other words, if the denom are [1,5,10]
you have access to unlimited amounts of 1s, 5s, 10s

if it's impossible to make change for the target amount, return -1
*/


minNumOfCoinsForChange = (n, denoms) =>{
    const coins = new Array(n+1).fill(Infinity) //assume Infinity ways
    coins[0] = 0 // initial change
    for (let denom of denoms) {
        for (let amount = 0; amount < coins.length; amount ++){
            if (denom <= amount){
                coins[amount] = Math.min(coins[amount], coins[amount - denom] + 1)
            }
        }
    }
    console.log(coins)
}

minNumOfCoinsForChange(7,[1,5,10])