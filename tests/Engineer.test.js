const Engineer = require("../lib/Engineer.js");

describe("Employee", () => {
    describe("constructor", () => {
        it("should call the name, id, and email and associate it to the employee class", () => {
            const value = {
                name: "engineer",
                id: "1",
                email: "engineer@gmail.com",
                github: "github.com/engineer"
            }
            const newEngineer = new Engineer(value);
            const name = newEngineer.name;
            const id = newEngineer.id;
            const email = newEngineer.email;
            const github = newEngineer.github;

            expect(name).toEqual('engineer');
            expect(id).toEqual('1');
            expect(email).toEqual('engineer@gmail.com');
            expect(github).toEqual('github.com/engineer');
        });
    });
});