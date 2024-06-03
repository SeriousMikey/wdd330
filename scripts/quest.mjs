export default class Quest {
    constructor(name, description, exp, stats) {
        this.name = name;
        this.description = description;
        this.exp = exp;
        this.stats = stats;
        this.init()
    }

    init() {
        this.active = false;
    }
}