const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("constructor", () => {
        it("should call the name, id, and email and associate it to the employee class", () => {
            const Manager = new Manager(value);
            const name = newManager.name;
            const id = newManager.id;
            const email = newManager.email;

            expect(name).toEqual('name');
            expect(id).toEqual('id');
            expect(email).toEqual('email');
        });
    });
});