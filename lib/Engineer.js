const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(val) {
        const name = val.name;
        const id = val.id;
        const email = val.email;

        super(name, id, email);

        this.github = val.github;
    }

    getGithub() {
        return `${this.github}`;
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;