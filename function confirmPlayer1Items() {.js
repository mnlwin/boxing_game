 function confirmPlayer1Items() {
    const item1 = document.getElementById("p1-item1").value;
    const item2 = document.getElementById("p1-item2").value;
    if (item1 === item2 && item1 !== "none") {
        alert("Please select two different items.");
        return;
    }
    try {
        applyItems(1, item1, item2);
        gameState.player1Confirmed = true;
        document.getElementById("p1-item1").disabled = true;
        document.getElementById("p1-item2").disabled = true;
        document.getElementById("confirm-p1").disabled = true;
        console.log("Player 1 confirmed:", gameState.player1);
        checkSetupComplete();
    } catch (error) {
        console.error("Error confirming Player 1 items:", error);
        if (error.message === "Not enough money for selected items") {
            // Calculate the cost
            const noItem = { name: "none", attack: 0, hp: 0, cost: 0 };
            const selectedItem1 = item1 === "none" ? noItem : items.find(i => i.name === item1);
            const selectedItem2 = item2 === "none" ? noItem : items.find(i => i.name === item2);
            const totalCost = selectedItem1.cost + selectedItem2.cost;
            alert(`Player 1: Not enough money! You have $${gameState.player1.money} but need $${totalCost}.`);
        } else {
            alert("An error occurred. Please try again.");
        }
    }
}

function confirmPlayer2Items() {
    const item1 = document.getElementById("p2-item1").value;
    const item2 = document.getElementById("p2-item2").value;
    if (item1 === item2 && item1 !== "none") {
        alert("Please select two different items.");
        return;
    }
    try {
        applyItems(2, item1, item2);
        gameState.player2Confirmed = true;
        document.getElementById("p2-item1").disabled = true;
        document.getElementById("p2-item2").disabled = true;
        document.getElementById("confirm-p2").disabled = true;
        console.log("Player 2 confirmed:", gameState.player2);
        checkSetupComplete();
    } catch (error) {
        console.error("Error confirming Player 2 items:", error);
        if (error.message === "Not enough money for selected items") {
            // Calculate the cost
            const noItem = { name: "none", attack: 0, hp: 0, cost: 0 };
            const selectedItem1 = item1 === "none" ? noItem : items.find(i => i.name === item1);
            const selectedItem2 = item2 === "none" ? noItem : items.find(i => i.name === item2);
            const totalCost = selectedItem1.cost + selectedItem2.cost;
            alert(`Player 2: Not enough money! You have $${gameState.player2.money} but need $${totalCost}.`);
        } else {
            alert("An error occurred. Please try again.");
        }
    }
}