// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "Project Name",
  },
  {
    type: "input",
    message: "What is your project's description?",
    name: "Project Description",
  },
  {
    type: "input",
    message: "What are the installation prerequisites?",
    name: "Installation prerequisites",
  },
  {
    type: "input",
    message: "What is the beneficial usage of your project?",
    name: "Usage",
  },
  {
    type: "input",
    message: "What are your project contribution guidelines?",
    name: "Contribution",
  },
  {
    type: "input", 
    message: "What are the testing instructions for the project?",
    name: "test",
  },
  {
    type: "rawlist",
    message: "What is the license being used for your project? If no choices apply, then choose none of the above and input your license in the next question.",
    name: "License",
    choices: [
      "ISC", 
      "MIT",
      "None of the above",
    ],
  },
  {
    type: "input",
    message: "What is the name of your license? If you already selected one from the previous question just press enter to prompt the next question.",
    name: "User License Input",
  },
  {
    type: "input",
    message: "What is your GitHub Username?",
    name: "GitHub Username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "Email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
