const inquirer = require("inquirer");
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

// the manager class is responsible for creating the team and leading the development of his/her team members
class Manager{
    // creates a new employee with manager properties, and inquires user about them
    newManager() {
        const manager = new Employee();
        manager.getName();
        manager.getId();
        manager.getEmail();

        this.addEmployee();
    }

    addEmployee() {
        inquirer
            .prompt([
                {
                    type: 'rawlist',
                    message: 'Would you like to add another member to your team?',
                    name: 'addemployee',
                    choices: ['Engineer', 'Intern', 'Finish building my team']
                }
            ])
            .then(val => {
                switch(val.addEmployee) {
                    case 'Engineer':
                        Engineer.form();
                    case 'Intern':
                        Intern.form();
                    case 'Finish building my team':
                        this.quit();
                }
            })
    }

    quit() {
        console.log("Successfully created landing page!");
    }
}

module.exports = Manager;