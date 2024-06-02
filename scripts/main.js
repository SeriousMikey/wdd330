import { populatePage } from "./utils.mjs";

if (window.location.href.includes("index")) {
    populatePage("quests", true);
    populatePage("quests", false);
}
else if (window.location.href.includes("inventory")) {
    populatePage("items", true);
}

else if (window.location.href.includes("store")) {
    populatePage("items", false);
}