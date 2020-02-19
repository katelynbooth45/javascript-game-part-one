let userHealthPoints = 40;
let grantHealthPoints = 10;
let roundWin = 0;

const getDamage = () => {
    return Math.floor(Math.random() * 5) + 1;
}

const startCombat = () => {
    const userName = prompt("What is your username?");
    
    while (userHealthPoints > 0 && roundWin < 3) {
        const decideCombat = prompt("Would you like to attack or quit this round?");

        if (decideCombat.toLowerCase() == "quit") {
            break;

        } else if (decideCombat.toLowerCase() == "attack"){
            userHealthPoints = userHealthPoints - getDamage();
            grantHealthPoints = grantHealthPoints - getDamage();
    
            console.log(`${userName} has ${userHealthPoints} health left.`);
            console.log(`Grant Almighty has ${grantHealthPoints} health left.`);
    
            if (grantHealthPoints <= 0) {
                roundWin++;
                grantHealthPoints = 10;
            }
        }
    }

    if (userHealthPoints > 0 && roundWin >= 3) {
        console.log(`${userName} won the game!`);
    } else {
        console.log("Grant Almighty won the game!");
    }
}

const startGame = () => {
    const getUserResponse = prompt("Do you want to play?"); 
    if (getUserResponse.toLowerCase() == "yes") {
    startCombat();
    }
}

startGame();