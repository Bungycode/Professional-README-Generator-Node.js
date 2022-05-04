// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Project_Name}

  ![License](https://img.shields.io/badge/License-ISC-yellow)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contribution)
  * [Tests](#test)
  * [License](#license)
  * [Questions](#questions)
  
  ## Description 
  ${data.Project_Description}
  
  ## Installation 
  ${data.Installation_Prerequisites}

  ## Usage 
  ${data.Usage}

  ## Contributors
  ${data.Contribution}

  ## Tests
  ${data.Test}

  ## License 
  The application is covered under the ${data.License} license.

  ## Questions
  You can search for my repo on GitHub by entering ${data.GitHub_Username} and you can view my projects at https://github.com/${data.GitHub_Username}. If you have any questions, please contact me at ${data.Email}

`;
}

module.exports = generateMarkdown;
