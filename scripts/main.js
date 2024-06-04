import { populatePage } from "./utils.mjs";


if (document.querySelector("#stats") != null && localStorage.getItem("quest-board") != null) {
    let questBoard = JSON.parse(localStorage.getItem("quest-board"));
    questBoard.map(populatePage);
}
else if (window.location.href.includes("inventory") && localStorage.getItem("inventory") != null) {
    let inventory = JSON.parse(localStorage.getItem("inventory"));
    inventory.map(populatePage);
}

else if (window.location.href.includes("store") && localStorage.getItem("store") != null) {
    let store = JSON.parse(localStorage.getItem("store"));
    store.map(populatePage);
}