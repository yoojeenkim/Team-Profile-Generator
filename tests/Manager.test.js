const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("constructor", () => {
        it("should call the name, id, and email and associate it to the employee class", () => {
            const value = {
                name: "manager",
                id: "1",
                email: "manager@gmail.com",
                officenumber: "101"
            };

            const Manager = new Manager(value);
            const name = newManager.name;
            const id = newManager.id;
            const email = newManager.email;
            const officenumber = newManager.officenumber;

            expect(name).toEqual('manager');
            expect(id).toEqual('1');
            expect(email).toEqual('manager@gmail.com');
            expect(officenumber).toEqual('101');
        });
    });
});