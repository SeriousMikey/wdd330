import { populatePage } from "./utils.mjs";

if (document.querySelector("#stats") != null) {
    populatePage("quests", true);
    populatePage("quests", false);
}
else if (window.location.href.includes("inventory")) {
    populatePage("items", true);
}

else if (window.location.href.includes("store")) {
    populatePage("items", false);
}