const neatCsv = require('neat-csv'); 
const fs = require('fs')

async function readFile(path){
    const data = fs.readFileSync(path, { encoding: 'utf8', flag:'r' })
    return neatCsv(data) // array of objects
}

async function run(){
    const players = await readFile('./applicants.csv')
    let winnerTable = {}
    for( let i =0 ; i < players.length; i++){
        if(!winnerTable[players[i].Name]){
            winnerTable[players[i].Name] = 0
        }
    }
    for (let i = 0; i < players.length; i++) {
        let currentPlayer = players[i]
        for (let j = i+1 ; j < players.length; j++){
            let opponentPlayer = players[j]
            startOfBattle( currentPlayer, opponentPlayer, winnerTable)
        }
    }
    const winner = getWinner(winnerTable)
    console.log("\n")
    console.log(winnerTable)
    console.log("The winner is", winner)
}

startOfBattle = (playerA, playerB, winnerTable) =>{
    
    console.log("\n")
    console.log("Here comes a new challenger !")
    console.log("\n")
    printCandidateInfo(playerA)
    console.log("\n")
    printCandidateInfo(playerB)
    console.log("\n")
    let roundCounter = 1
    const initialPlayerA = Object.assign({}, playerA)
    const initialPlayerB = Object.assign({}, playerB)
    roundsOfBattle(initialPlayerA, initialPlayerB, roundCounter, winnerTable)
}

roundsOfBattle = (playerA, playerB, counter, winnerTable) =>{
    let frist , second , firstRoll, secondRoll ,firstAttacks , secondAttacks
    const randomA = randomInitiative(playerA.Initiative)
    const randomB = randomInitiative(playerB.Initiative)

    // can be refactor 
    if (randomA >= randomB) {
        first = playerA
        firstRoll = randomA
        second = playerB
        secondRoll = randomB
    }else {
        first = playerB
        firstRoll = randomB
        second = playerA
        secondRoll = randomA
    }

    console.log('Round' + " " + counter + ":")
    console.log( first.Name + " is randomly selected to go first" + " ("+ firstRoll + " > " + secondRoll +")")
    
    firstAttacks = first.Attacks
    secondAttacks = second.Attacks
    
    while( firstAttacks > 0 || secondAttacks > 0) {
        if (firstAttacks > 0){
            calculateDamage(first, second)
            firstAttacks --
            if (second.Health <= 0) {
                console.log("\n")
                console.log(first.Name + " wins!")
                winnerTable[first.Name]+=1
                break
            }
        }else{
            break
        }
        if (secondAttacks > 0) {
            calculateDamage(second, first)
            secondAttacks --
            if (first.Health <= 0) {
                console.log("\n")
                console.log(second.Name + " wins!") 
                winnerTable[second.Name] +=1
                break
            }
        }else{
            break
        }
    }
    if (first.Health > 0  && second.Health > 0){
        counter ++
        roundsOfBattle(first, second, counter, winnerTable) 
    }
}

printCandidateInfo = (player) =>{
    console.log("Candidate:" + player.Name)
    console.log("Health:" + player.Health)
    console.log("Damage:" + player.Damage)
    console.log("Attacks:" + player.Attacks)
}
calculateDamage = (playerOne, playerTwo) =>{
    let beforeHit = playerTwo.Health
    if (isDodge(playerTwo.Dodge)){ 
        console.log( playerTwo.Name + " successfully dodged " + playerOne.Name + "'s attack" + " (" + beforeHit + " -> " + playerTwo.Health + ")")
        return
    }else{
        if (isCritical(playerOne.Critical)){
            playerTwo.Health -= playerOne.Damage * 2
            console.log( playerOne.Name + " critical hits " + playerTwo.Name + " for " + playerOne.Damage * 2 + " (" + beforeHit + " -> " + playerTwo.Health + ")")
            return
        }else{
            playerTwo.Health -= playerOne.Damage
            console.log( playerOne.Name + " hits " + playerTwo.Name + " for " + playerOne.Damage + " (" + beforeHit + " -> " + playerTwo.Health + ")")
            return
        }
    }
}
randomInitiative = (initiative) =>{
    return Math.floor(Math.random() * 100) + parseInt(initiative)
}
isCritical = (critical) =>{
    if (Math.floor(Math.random()* 100) > critical) {
        return false
    }else{
        return true
    }
}
isDodge = (dodge) =>{
    const accuracy = 100
    const hitChance = ((accuracy - dodge) / accuracy) * 100
    if (Math.floor(Math.random() *100) > hitChance){
        return true
    }else{
        return false
    }
}
getWinner = (table) =>{
    return Object.keys(table).reduce((a,b) => table[a] > table[b] ? a : b) //return the highest count value as winner
}
run()

