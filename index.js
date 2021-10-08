const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./lib/generateHTML");

inquirer
    .prompt([
        {
            type: "input",
            name: "manager",
            message: "Enter Team Manager's Name"
        },
        {
            type: "input",
            name: "managerID",
            message: "Enter Team Manager's Employee ID"
        },
        {
            type: "input",
            name: "manageremail",
            message: "Enter Team Manager's Email Address"
        },
        {
            type: "input",
            name: "manageroffice",
            message: "Enter Team Manager's Office Number"
        }
    .then()
    ])