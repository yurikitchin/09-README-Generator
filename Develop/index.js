// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
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
        type: "inupt",
        message: "Please proide a li cence url",
        name: "licence",
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log("success"),
        console.log(answers)
        console.log(answers.title)
        console.log(answers.test)
        
    })
}

// Function call to initialize app
init();
