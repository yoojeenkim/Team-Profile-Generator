const Engineer = require("../lib/Engineer.js");

describe("Employee", () => {
    describe("constructor", () => {
        it("should call the name, id, and email and associate it to the employee class", () => {
            const newEngineer = new Engineer(value);
            const name = newEngineer.value.name;
            const id = newEngineer.value.id;
            const email = newEngineer.value.email;
            const github = newEngineer.value.github;

            expect(name).toEqual('name');
            expect(id).toEqual('id');
            expect(email).toEqual('email');
            expect(github).toEqual('github');
        });
    });
});