// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache Licence 2.0'){
    return '![](https://img.shields.io/badge/License-Apache-blue)'
  }
  if (license === 'GNU General Public Licence v3.0'){
    return '![](https://img.shields.io/badge/License-GNU--GPL-blue)'
  }
  if (license === 'GNU General Public Licence v3.0'){
    return '![](https://img.shields.io/badge/License-GNU--GPL-blue)'
  }
}
,, 'MIT licence', 'BSD 2-clause "simplified" licence
//apache https://img.shields.io/badge/License-Apache-blue
//bsd https://img.shields.io/badge/License-BSD-orange
//MIT https://img.shields.io/badge/License-MIT-yellow
//GNU https://img.shields.io/badge/License-GNU--GPL-blue


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Description<br>
  ${data.description}

  # Table of Contents

  *[Delployed links](#Deployed-links)

  *[Installation Instructions](#installation)

  *[Usage](#usage)

  *[Contribution Guidelines](#Contribution)

  *[Test Instructions](#Test)

  *[Liscence](#Liscence)

  # Deployed-links<br>
  ${data.deployed}

  # Installation Instructions<br>
  ${data.installation}

  # Usage<br>
  ${data.usage}

  # Contribution Guidelines<br>
  ${data.contribution}

  # Test Instructions<br>
  ${data.test}

  # Licence
  ${data.licence}
  ${renderLicenseBadge(data.licence)}

  # Author
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
