let userHealthPoints = 40;
let grantHealthPoints = 10;

let roundWin = 0;

const startGame = () => {
    const userName = prompt("What is your name?");

    while (userHealthPoints > 0 && roundWin < 3) {
        userHealthPoints = userHealthPoints - (Math.floor(Math.random() * 2) + 1);
        grantHealthPoints = grantHealthPoints - (Math.floor(Math.random() * 2) + 1);

        console.log(`${userName} has ${userHealthPoints} health left.`);
        console.log(`Grant Almighty has ${grantHealthPoints} health left.`);
        
        if (grantHealthPoints <= 0) {
            roundWin++;
            grantHealthPoints = 10;
        }
    }

    if (userHealthPoints > 0 && roundWin >= 3) {
        console.log(`${userName} won the game!`);
    } else {
        console.log("Grant Almighty won the game!");
    }
}

const getUserResponse = prompt("Do you want to play?"); 

if (getUserResponse === "Yes") {
    startGame();
}