const Manager = require("./lib/Manager");
const inquirer = require("inquirer");


inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your id?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your e-mail address?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "officenumber"
        }
    ])
    .then((res) => {
        const manager = new Manager(res);
    })
