// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const { error } = require('console');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Please enter the Title of your project",
        name: "title"
    },
    {
        type: "inupt",
        message: "Enter a description for your project",
        name: "description",
    },
    {
        type: "inupt",
        message: "Please enter your deployed links",
        name: "deployed",
    },
    {
        type: "inupt",
        message: "How do you install your projet",
        name: "installation",
    },
    {
        type: "inupt",
        message: "Please provide instructions on how to use your project",
        name: "usage",
    },
    {
        type: "inupt",
        message: "Please provide guidelines for potential contributors!",
        name: "contribution",
    },
    {
        type: "inupt",
        message: "Please provide testing instructions",
        name: "test",
    },
    {
        type: "list",
        name: "licence",
        message: "Please select a licence",
        choices: ['Apache Licence 2.0','GNU General Public Licence v3.0', 'MIT licence', 'BSD 2-clause "simplified" licence', 'No Licence']
    },
    {
        type: "inupt",
        message: "please provide a link to your GitHub",
        name: "github",
    },
    {
        type: "inupt",
        message: "please provide your email",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log("You're new README.md has been created"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log("success"),
        writeToFile('README.md', generateMarkdown(data))
        // console.log(answers)
        // console.log(answers.title)
        // console.log(answers.test)
        
    })
}

// Function call to initialize app
init();
