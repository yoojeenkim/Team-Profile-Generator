const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern.js");
const generateHtml = require("./lib/generateHtml.js");
const generateCss = require("./lib/generateCss.js");
const fs = require("fs");
const obj = [];

function writeToFile(fileName, data) {
    const htmlContent = generateHtml(data);

    fs.writeFile(fileName, htmlContent, (err) =>
    err ? console.log(err) : console.log("Successfully created HTML file!")
    );

    const cssContent = generateCss();

    fs.writeFile("./output/styles.css", cssContent, (err) => 
    err ? console.log(err) : console.log("Succesfully created CSS file!")
    );
}

function internCard() {
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
                message: "What school do you attend?",
                name: "school"
            },
            {
                type: "rawlist",
                message: "Would you like add another team member?",
                choices: ["Engineer", "Intern", "Quit"],
                name: "choices"
            }
        ])
        .then((res) => {
            const intern = new Intern(res);
            
            obj.push(intern);

            switch (res.choices) {
                case 'Engineer':
                    return engineerCard();
                case 'Intern':
                    return internCard();
                case 'Quit':
                    return writeToFile("./output/index.html", obj);
            }
        });
}

function engineerCard() {
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
                message: "What is your github username?",
                name: "github"
            },
            {
                type: "rawlist",
                message: "Would you like add another team member?",
                choices: ["Engineer", "Intern", "Quit"],
                name: "choices"
            }
        ])
        .then((res) => {
            const engineer = new Engineer(res);

            obj.push(engineer);

            switch (res.choices) {
                case 'Engineer':
                    return engineerCard();
                case 'Intern':
                    return internCard();
                case 'Quit':
                    return writeToFile("./output/index.html", obj);
            }
        });
}

function init() {
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
            },
            {
                type: "rawlist",
                message: "Would you like add another team member?",
                choices: ["Engineer", "Intern", "Quit"],
                name: "choices"
            }
        ])
        .then((res) => {
            const manager = new Manager(res);

            obj.push(manager);

            switch (res.choices) {
                case 'Engineer':
                    return engineerCard();
                case 'Intern':
                    return internCard();
                case 'Quit':
                    return writeToFile("./output/index.html", obj);
            }
        });
}

init();