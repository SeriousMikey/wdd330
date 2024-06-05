import User from "./user.mjs";

function loadName() {
    if (localStorage.getItem("user-name") == null) {
        localStorage.setItem("user-name", "");
    }
    let userName = document.getElementById("user-name");
    userName.value = localStorage.getItem("user-name");
    document.getElementById("name-button").addEventListener("click", () => {
        saveName(userName);
    });
}

function saveName(userName) {
    localStorage.removeItem("user-name");
    localStorage.setItem("user-name", userName.value);
}

function setStats() {
    if (localStorage.getItem("user-stats") == null) {
        let newUser = new User();
        localStorage.setItem("user-stats", JSON.stringify(newUser));
    }

    let user = JSON.parse(localStorage.getItem("user-stats"))["statWindow"];
    let level = document.getElementById("user-level");
    let exp = document.getElementById("user-exp");
    let dollars = document.getElementById("user-dollars");
    let health = document.getElementById("user-health");
    let strength = document.getElementById("user-strength");
    let defense = document.getElementById("user-defense");
    let stamina = document.getElementById("user-stamina");
    let magic = document.getElementById("user-magic");
    let statTotal = document.getElementById("user-total");

    if (user.CurrentEXP > user.NecessaryEXP) {
        do {
            user.Level += 1;
            user.CurrentEXP -= user.NecessaryEXP;
            user.NecessaryEXP *= 1.2;
        } while (user.CurrentEXP > user.NecessaryEXP);
    }

    level.innerHTML = `Level: ${user.Level}`;
    exp.innerHTML = `Current EXP: ${Math.round(user.CurrentEXP)}/${Math.round(user.NecessaryEXP)}`;
    dollars.innerHTML = `Money: $${user.Dollars}`;
    health.innerHTML = `Health: ${user.Health}`;
    strength.innerHTML = `Strength: ${user.Strength}`;
    defense.innerHTML = `Defense: ${user.Defense}`;
    stamina.innerHTML = `Stamina: ${user.Stamina}`;
    magic.innerHTML = `Magic: ${user.Magic}`;
    statTotal.innerHTML = `Stat Total: ${user.Health + user.Strength + user.Defense + user.Stamina + user.Magic}`;
}

loadName();
setStats();