const Employee = require("./Employee");

class Intern extends Employee {
    constructor(val) {
        const name = val.name;
        const id = val.id;
        const email = val.email;

        super(name, id, email);

        this.school = val.school;
    }

    getSchool() {
        return `${this.school}`;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;