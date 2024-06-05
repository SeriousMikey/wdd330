export function populatePage(array) {
    if (array["Type"] == "Item" && array["Active"]) {
        renderInventory(array);
    }
    else if (array["Type"] == "Item" && !array["Active"]) {
        renderStore(array);
    }
    else if (array["Type"] == "Quest" && array["Active"]) {
        renderActiveQuests(array);
        }
    else if (array["Type"] == "Quest" && !array["Active"]) {
        renderQuestBoard(array);
    }
}

function renderInventory(array) {
    let section = document.querySelector(".items");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "item-box")

    let content = `<h2>${array.Name}</h2>
    <h4>Description:</h4>
    <p>${array.Description}</p>
    <button class="big-button">Use</button>
    <button class="small-button">Discard</button>`

    newDiv.innerHTML = content;
    section.appendChild(newDiv);
}

function renderStore(array) {
    let section = document.querySelector(".items");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "item-box")

    let content = `<h2>${array.Name}</h2>
    <h3>Cost: ${array.Cost}</h3>
    <h4>Description:</h4>
    <p>${array.Description}</p>
    <button class="big-button">Purchase</button>
    <button class="small-button">Delete</button>`

    newDiv.innerHTML = content;
    section.appendChild(newDiv);
}

function renderActiveQuests(array) {
    let section = document.querySelector("#active-quests");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "quest-box")

    let content = `<h2>${array.Name}</h2>
    <div class="rewards-box">
        <h4>Rewards:</h4>
        <p>+${array.Exp} EXP</p>
        <p>+${array.Dollars} Dollars</p>`

    for (let i = 0; i < array.Stats.length; i++) {
        content += `<p>+1 ${String(array.Stats[i])}</p>`;
    }

    content += `</div>
    <div class="description-box">
        <h4>Description</h4>
        <p>${array.Description}</p>
    </div>
    <button class="big-button">Mark Complete</button>
    <button class="small-button">Abandon</button>`

    newDiv.innerHTML = content;
    section.appendChild(newDiv);
}

function renderQuestBoard(array) {
    let section = document.querySelector("#quest-board");
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "quest-box")

    let content = `<h2>${array.Name}</h2>
    <div class="rewards-box">
        <h4>Rewards:</h4>
        <p>+${array.Exp} EXP</p>
        <p>+${array.Dollars} Dollars</p>`

    for (let i = 0; i < array.Stats.length; i++) {
        content += `<p>+1 ${String(array.Stats[i])}</p>`;
    }

    content += `</div>
    <div class="description-box">
        <h4>Description</h4>
        <p>${array.Description}</p>
    </div>
    <button class="big-button">Accept</button>
    <button class="small-button">Delete</button>`

    newDiv.innerHTML = content;
    section.appendChild(newDiv);
}