import Item from "./item.mjs";

document.forms["item-creation"].addEventListener("submit", (event) => {
    event.preventDefault();
    let form = document.forms["item-creation"];
    if (form.checkValidity()) {
        createItem();
    }
});

document.forms["item-creation"].addEventListener("reset", () => {
    document.forms["item-creation"].reset();
});

function createItem() {
    let name = document.getElementById("itemname").value;
    let description = document.getElementById("itemdescription").value;
    let cost = document.getElementById("cost").value;
    
    let newItem = new Item(name, description, cost);
    addToStore(newItem);
}

function addToStore(item) {
    let store = [];

    if (localStorage.getItem("store") != null) {
        store = JSON.parse(localStorage.getItem("store"));
        localStorage.removeItem("store");
    }

    store.push(item.getJSON());

    localStorage.setItem("store", JSON.stringify(store));

    alert("Added to Store");
    document.forms["item-creation"].reset();
}