export function populatePage(type, active) {
    if (type == "items") {
        if (active == true) {
            renderInventory();
        }
        else {
            renderStore();
        }
    }
    else if (type == "quests") {
        if (active == true) {
            renderActiveQuests();
        }
        else {
            renderQuestBoard();
        }
    }
    else {
        console.log("Not a correct type")
    }
}

function renderInventory() {
    let section = document.querySelector(".items");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "item-box")

    let content = `<h2>Item Name</h2>
    <h4>Description:</h4>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi labore reiciendis cupiditate rerum aut quasi recusandae distinctio, culpa dicta quia?</p>
    <button class="big-button">Use</button>
    <button class="small-button">Discard</button>`

    newDiv.innerHTML = content;
    section.appendChild(newDiv);
}

function renderStore() {
    let section = document.querySelector(".items");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "item-box")

    let content = `<h2>Item Name</h2>
    <h3>Cost: $40</h3>
    <h4>Description:</h4>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi labore reiciendis cupiditate rerum aut quasi recusandae distinctio, culpa dicta quia?</p>
    <button class="big-button">Purchase</button>
    <button class="small-button">Delete</button>`

    newDiv.innerHTML = content;
    section.appendChild(newDiv);
}

function renderActiveQuests() {
    let section = document.querySelector("#active-quests");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "quest-box")

    let content = `<h2>Quest Name</h2>
    <div class="rewards-box">
        <h4>Rewards:</h4>
        <p>+53 EXP</p>
        <p>+10 Dollars</p>
        <p>+1 Strength</p>
        <p>+1 Defense</p>
        <p>+1 Stamina</p>
    </div>
    <div class="description-box">
        <h4>Description</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, adipisci.</p>
    </div>
    <button class="big-button">Mark Complete</button>
    <button class="small-button">Abandon</button>`

    newDiv.innerHTML = content;
    section.appendChild(newDiv);
}

function renderQuestBoard() {
    let section = document.querySelector("#quest-board");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "quest-box")

    let content = `<h2>Quest Name</h2>
    <div class="rewards-box">
        <h4>Rewards:</h4>
        <p>+53 EXP</p>
        <p>+10 Dollars</p>
        <p>+1 Strength</p>
        <p>+1 Defense</p>
        <p>+1 Stamina</p>
    </div>
    <div class="description-box">
        <h4>Description</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, adipisci.</p>
    </div>
    <button class="big-button">Accept</button>
    <button class="small-button">Delete</button>`

    newDiv.innerHTML = content;
    section.appendChild(newDiv);
}