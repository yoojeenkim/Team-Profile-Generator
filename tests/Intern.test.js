const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("constructor", () => {
        it("should call the name, id, and email and associate it to the employee class", () => {
            const newIntern = new Intern('name', 'id', 'email');
            const name = newIntern.name;
            const id = newIntern.id;
            const email = newIntern.email;

            expect(name).toEqual('name');
            expect(id).toEqual('id');
            expect(email).toEqual('email');
        });
    });
});