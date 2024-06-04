export default class Quest {
    constructor(name, description, exp, dollars, stats) {
        this.name = name;
        this.description = description;
        this.exp = exp;
        this.dollars = dollars;
        this.stats = stats;
        this.init();
    }

    init() {
        this.active = false;
        this.setJSON();
    }

    setJSON() {
        this.object = {"Type": "Quest",
            "Name": this.name,
            "Description": this.description,
            "Exp": this.exp,
            "Dollars": this.dollars,
            "Stats": this.stats,
            "Active": this.active
        };
    }

    getJSON() {
        return this.object;
    }
}