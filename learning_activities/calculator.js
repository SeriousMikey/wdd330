let calculator = {
    read() {
        this.a = +prompt("What is a?", 10);
        this.b = +prompt("What is b?", 2);
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
}