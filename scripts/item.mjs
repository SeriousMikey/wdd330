export default class Item {
    constructor(name, description, cost) {
        this.name = name;
        this.description = description;
        this.cost = cost;
        this.init();
    }

    init() {
        this.active = false;
        this.setJSON();
    }

    setJSON() {
        this.object = {"Type": "Item",
            "Name": this.name,
            "Description": this.description,
            "Cost": this.cost,
            "Active": this.active
        };
    }

    getJSON() {
        return this.object;
    }
}