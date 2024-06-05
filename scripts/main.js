import { populatePage } from "./utils.mjs";


function loadPage() {
    if (document.querySelector("#stats") != null && localStorage.getItem("quest-board") != null) {
        let questBoard = JSON.parse(localStorage.getItem("quest-board"));
        questBoard.map(populatePage);
    }
    if (document.querySelector("#stats") != null && localStorage.getItem("active-quests") != null) {
        let activeQuests = JSON.parse(localStorage.getItem("active-quests"));
        activeQuests.map(populatePage);
    }
    if (window.location.href.includes("inventory") && localStorage.getItem("inventory") != null) {
        let inventory = JSON.parse(localStorage.getItem("inventory"));
        inventory.map(populatePage);
    }
    if (window.location.href.includes("store") && localStorage.getItem("store") != null) {
        let store = JSON.parse(localStorage.getItem("store"));
        store.map(populatePage);
    }
    
    const bigButtons = document.querySelectorAll(".big-button");
    bigButtons.forEach(function(bigButton) {
        bigButton.addEventListener("click", () => {
            let parent = bigButton.parentElement;
            let grandparent = parent.parentElement.id;
            let name = parent.childNodes[0].innerHTML;
            
            if (grandparent == "quest-board") {
                activateQuest(name);
            }
            else if (grandparent == "active-quests") {
                completeQuest(name);
            }
            else if (grandparent == "inventory-items") {
                useItem(name);
            }
            else if (grandparent == "store-items") {
                addToInventory(name);
            }
        });
    });
    
    const smallButtons = document.querySelectorAll(".small-button");
    smallButtons.forEach(function(smallButton) {
        smallButton.addEventListener("click", () => {
            let parent = smallButton.parentElement;
            let grandparent = parent.parentElement.id;
            let name = parent.childNodes[0].innerHTML;
            
            if (grandparent == "quest-board") {
                deleteQuest(name);
            }
            else if (grandparent == "active-quests") {
                abandonQuest(name);
            }
            else if (grandparent == "inventory-items") {
                useItem(name);
            }
            else if (grandparent == "store-items") {
                deleteItem(name);
            }
        });
    });
}

function activateQuest(questName) {
    let questBoard = JSON.parse(localStorage.getItem("quest-board"));
    for (let i = 0; i < questBoard.length; i++) {
        if (questBoard[i].Name == questName) {
            let activeQuests = [];
            if (localStorage.getItem("active-quests") != null) {
                activeQuests = JSON.parse(localStorage.getItem("active-quests"));
                localStorage.removeItem("active-quests");
            }

            questBoard[i].Active = true;
            activeQuests.push(questBoard[i]);
            localStorage.setItem("active-quests", JSON.stringify(activeQuests));

            localStorage.removeItem("quest-board");
            questBoard.splice(i, 1);
            localStorage.setItem("quest-board", JSON.stringify(questBoard));

            location.reload();
        }
    }
}

function completeQuest(questName) {
    let activeQuests = JSON.parse(localStorage.getItem("active-quests"));
    for (let i = 0; i < activeQuests.length; i++) {
        if (activeQuests[i].Name == questName) {
            let statWindow = JSON.parse(localStorage.getItem("user-stats"))["statWindow"];
            localStorage.removeItem("user-stats");

            let questStats = activeQuests[i].Stats;
            let possibleStats = ["Health", "Strength", "Defense", "Stamina", "Magic"]
            
            statWindow.CurrentEXP += Number(activeQuests[i].Exp);
            statWindow.Dollars += Number(activeQuests[i].Dollars);
            for (let j = 0; j < possibleStats.length; j++) {
                if (questStats.includes(possibleStats[j])) {
                    if (j == 0) {
                        statWindow.Health += 1;
                    }
                    else if (j == 1) {
                        statWindow.Strength += 1;
                    }
                    else if (j == 2) {
                        statWindow.Defense += 1;
                    }
                    else if (j == 3) {
                        statWindow.Stamina += 1;
                    }
                    else if (j == 4) {
                        statWindow.Magic += 1;
                    }
                }
            }
            let user = {statWindow};
            localStorage.setItem("user-stats", JSON.stringify(user));

        }   localStorage.removeItem("active-quests");
            activeQuests.splice(i, 1);
            localStorage.setItem("active-quests", JSON.stringify(activeQuests));

            location.reload();
    }
}

function deleteQuest(questName) {
    let questBoard = JSON.parse(localStorage.getItem("quest-board"));
    for (let i = 0; i < questBoard.length; i++) {
        if (questBoard[i].Name == questName) {
            localStorage.removeItem("quest-board");
            questBoard.splice(i, 1);
            localStorage.setItem("quest-board", JSON.stringify(questBoard));

            location.reload();
        }
    }
}

function abandonQuest(questName) {
    let activeQuests = JSON.parse(localStorage.getItem("active-quests"));
    let questBoard = JSON.parse(localStorage.getItem("quest-board"));

    for (let i = 0; i < activeQuests.length; i++) {
        if (activeQuests[i].Name == questName) {

            localStorage.removeItem("active-quests");
            activeQuests[i].Active = false;

            localStorage.removeItem("quest-board");
            questBoard.push(activeQuests[i]);
            localStorage.setItem("quest-board", JSON.stringify(questBoard));

            activeQuests.splice(i, 1);
            localStorage.setItem("active-quests", JSON.stringify(activeQuests));

            location.reload();
        }
    }
}

function addToInventory(itemName) {
    let store = JSON.parse(localStorage.getItem("store"));
    let statWindow = JSON.parse(localStorage.getItem("user-stats"))["statWindow"];
    for (let i = 0; i < store.length; i++) {
        if (store[i].Name == itemName) {
            if (store[i].Cost <= statWindow.Dollars) {
                localStorage.removeItem("user-stats");
                statWindow.Dollars -= store[i].Cost;
                let user = {statWindow};
                localStorage.setItem("user-stats", JSON.stringify(user));

                let inventory = [];
                if (localStorage.getItem("inventory") != null) {
                    inventory = JSON.parse(localStorage.getItem("inventory"));
                    localStorage.removeItem("inventory");
                }

                store[i].Active = true;
                inventory.push(store[i]);
                localStorage.setItem("inventory", JSON.stringify(inventory));

                alert("Item Purchased");
            }
            else {
                alert("Not enough money");
            }
        }
    }
}

function useItem(itemName) {
    let inventory = JSON.parse(localStorage.getItem("inventory"));
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].Name == itemName) {
            localStorage.removeItem("inventory");
            inventory.splice(i, 1);
            localStorage.setItem("inventory", JSON.stringify(inventory));

            location.reload();
        }
    }
}

function deleteItem(itemName) {
    let store = JSON.parse(localStorage.getItem("store"));
    for (let i = 0; i < store.length; i++) {
        if (store[i].Name == itemName) {
            localStorage.removeItem("store");
            store.splice(i, 1);
            localStorage.setItem("store", JSON.stringify(store));

            location.reload();
        }
    }
}

loadPage();