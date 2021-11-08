const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("constructor", () => {
        it("should call the name, id, and email and associate it to the employee class", () => {
            const value = {
                name: "intern",
                id: "2",
                email: "intern@gmail.com",
                school: "Georgia Tech"
            };

            const newIntern = new Intern(value);
            const name = newIntern.name;
            const id = newIntern.id;
            const email = newIntern.email;
            const school = newIntern.school;

            expect(name).toEqual('intern');
            expect(id).toEqual('2');
            expect(email).toEqual('intern@gmail.com');
            expect(school).toEqual('Georgia Tech');
        });
    });
});