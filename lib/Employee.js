const inquirer = require('inquirer');

class Employee {
    getName() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your name?',
                    name: 'name'
                }
            ])
            .then((response) = () => {
                // return response.name = name;
            });
    }

    getId() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your ID?',
                    name: 'id'
                }
            ])
    }

    getEmail() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'What is your ID?',
                    name: 'email'
                }
            ])
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;