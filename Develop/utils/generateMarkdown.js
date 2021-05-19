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
  return `# ${data.title}
  # Title

  # Description

  # Table of Contents

  *[Delployed links](#Deployed-links)

  *[Installation Instructions](#installation Instructions)

  *[Usage](#usage)

  *[Contribution Guidelines](#Contribution Guidelines)

  *[Test Instructions](#Test Instructions)

  *[Liscence](#Liscence)

  # Deployed-links
  ${answer.deployed}

  #Installation
  ${answer.installation}

  #Usage
  ${answer.usage}

  Contribution Guidelines
  ${answer.contribution}

  Test Instructions
  ${answer.test}

  Licence
  ${answer.licence}

  Author
  ${answer.github}
  ${answer.email}
`;
}

module.exports = generateMarkdown;
