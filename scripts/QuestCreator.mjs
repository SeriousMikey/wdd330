import Quest from "./quest.mjs";

document.forms["quest-creation"].addEventListener("submit", (event) => {
    event.preventDefault();
    let form = document.forms["quest-creation"];
    if (form.checkValidity()) {
        createQuest();
    }
});

document.forms["quest-creation"].addEventListener("reset", () => {
    document.forms["quest-creation"].reset();
});

function createQuest() {
    let name = document.getElementById("questname").value;
    let description = document.getElementById("questdescription").value;
    let exp = document.getElementById("exp").value;
    let dollars = document.getElementById("dollars").value;
    let health = document.getElementById("health");
    let strength = document.getElementById("strength");
    let defense = document.getElementById("defense");
    let stamina = document.getElementById("stamina");
    let magic = document.getElementById("magic");

    let stats = [];
    if (health.checked) {
        stats.push("Health")
    }
    if (strength.checked) {
        stats.push("Strength")
    }
    if (defense.checked) {
        stats.push("Defense")
    }
    if (stamina.checked) {
        stats.push("Stamina")
    }
    if (magic.checked) {
        stats.push("Magic")
    }
    
    let newQuest = new Quest(name, description, exp, dollars, stats);
    addToQuestBoard(newQuest);
}

function addToQuestBoard(quest) {
    let questBoard = [];

    if (localStorage.getItem("quest-board") != null) {
        questBoard = JSON.parse(localStorage.getItem("quest-board"));
        localStorage.removeItem("quest-board");
    }

    questBoard.push(quest.getJSON());

    localStorage.setItem("quest-board", JSON.stringify(questBoard));

    alert("Added to Quest Board");
    document.forms["quest-creation"].reset();
}