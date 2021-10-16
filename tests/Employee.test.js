const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("constructor", () => {
        it("should call the name, id, and email and associate it to the employee class", () => {
            const newEmployee = new Employee('name', 'id', 'email');
            const name = newEmployee.name;
            const id = newEmployee.id;
            const email = newEmployee.email;

            expect(name).toEqual('name');
            expect(id).toEqual('id');
            expect(email).toEqual('email');
        });
    });
});