// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = "README.md";

// TODO: Create an array of questions for user input
  const questions = [
    {
      type: "input",
      message: "What is the name of your project?",
      name: "Project_Name",
    },
    {
      type: "input",
      message: "What is your project's description?",
      name: "Project_Description",
    },
    {
      type: "input",
      message: "What are the installation prerequisites?",
      name: "Installation_Prerequisites",
    },
    {
      type: "input",
      message: "What is the beneficial usage of your project?",
      name: "Usage",
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
      name: "User_License_Input",
    },
    {
      type: "input",
      message: "What are your project contribution guidelines?",
      name: "Contribution",
    },
    {
      type: "input", 
      message: "What are the testing instructions for the project?",
      name: "Test",
    },
    {
      type: "input",
      message: "What is your GitHub Username?",
      name: "GitHub_Username",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "Email",
    },
  ];

// TODO: Create a function to write README file


function writeToFile(fileName, data) {
  generateMarkdown(data);
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
    if (err) throw err;
    console.log("This README File Is Successfully Generated!");
  });
} 
  

// TODO: Create a function to initialize app
const init = () => {
  inquirer
    .prompt(questions)
    .then((data) => {
      if (data.License === "None of the above") {
        data.License = data.User_License_Input
      }
      writeToFile(fileName, data)
    })
}

// Function call to initialize app
init();
