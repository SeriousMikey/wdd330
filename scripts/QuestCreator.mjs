import Quest from "./quest.mjs";


document.getElementById("createQuest").addEventListener("click", createQuest);

function createQuest() {
    let name = document.getElementById("questname").value;
    let description = document.getElementById("questdescription").value;
    let exp = document.getElementById("exp").value;
    let health = document.getElementById("health");
    let strength = document.getElementById("strength");
    let defense = document.getElementById("defense");
    let stamina = document.getElementById("stamina");
    let magic = document.getElementById("magic");

    let stats = [];


    if (health.checked) {
        stats.push("health")
    }
    if (strength.checked) {
        stats.push("strength")
    }
    if (defense.checked) {
        stats.push("defense")
    }
    if (stamina.checked) {
        stats.push("stamina")
    }
    if (magic.checked) {
        stats.push("magic")
    }
    
    let newQuest = new Quest(name, description, exp, stats);

    addToQuestBoard(newQuest);
}

function addToQuestBoard(quest) {
    let questBoard = [];

    if (localStorage.getItem("quest-board") != null) {
        questBoard = localStorage.getItem("quest-board");
        localStorage.removeItem("quest-board");
    }

    
    questBoard.push(quest);
    localStorage.setItem("quest-board") = questBoard;
}