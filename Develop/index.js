// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
        message: "How do you install your projet",
        name: "installation",
    },
    {
        type: "inupt",
        message: "Please provide instructions on how to use your project",
        name: "Usage",
    },
    {
        type: "inupt",
        message: "Please provide guidelines for potential contributors!",
        name: "Contribution",
    },
    {
        type: "inupt",
        message: "Please provide testing instructions",
        name: "Test",
    },
    {
        type: "inupt",
        message: "Please proide a liscence url",
        name: "Liscence",
    },
    {
        type: "inupt",
        message: "please provide a link to your GitHub",
        name: "GitHub",
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
function init() {}

// Function call to initialize app
init();
