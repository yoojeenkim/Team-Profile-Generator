const Employee = require("./Employee");

class Manager extends Employee {
    constructor(val) {
        const name = val.name;
        const id = val.id;
        const email = val.email;

        super(name, id, email);

        this.officenumber = val.officenumber;
    }

    getOfficeNumber() {
        return `${this.officenumber}`;
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;