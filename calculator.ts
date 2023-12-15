import inquirer from "inquirer";

let calculator = await inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: 'Enter your username?',
    },
    {
        type: 'input',
        name: 'age',
        message: 'What is your age?',
    },
    {
        type: 'input',
        name: 'Work',
        message: 'What do you do?',
    },
    {
        type: 'input',
        name: 'Number',
        message: 'What is your phone number?',
    },
    {
        type: 'confirm',
        name: 'confirm',
        message: 'Are you sure?',
        default: true,
    },
])
console.log(calculator);
