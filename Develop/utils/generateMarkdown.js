// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache Licence 2.0'){
    return '![](https://img.shields.io/badge/License-Apache-blue)'
  }
  if (license === 'GNU General Public Licence v3.0'){
    return '![](https://img.shields.io/badge/License-GNU--GPL-blue)'
  }
  if (license === 'MIT licence'){
    return '![](https://img.shields.io/badge/License-MIT-yellow)'
  }
  if (license === 'BSD 2-clause "simplified" licence'){
    return '![](https://img.shields.io/badge/License-BSD-orange)'
  }
  if (license === 'No Licence'){
    return ""
  }
}
//apache https://img.shields.io/badge/License-Apache-blue
//bsd https://img.shields.io/badge/License-BSD-orange
//MIT 
//GNU https://img.shields.io/badge/License-GNU--GPL-blue


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache Licence 2.0'){
    return "Licence documentation can be found at [https://www.apache.org/licenses/LICENSE-2.0]"
  }
  if (license === 'GNU General Public Licence v3.0'){
    return "Licence documentation can be found at [https://www.gnu.org/licenses/gpl-3.0.en.html]"
  }
  if (license === 'MIT licence'){
    return "Licence documentation can be found at [https://opensource.org/licenses/MIT]"
  }
  if (license === 'BSD 2-clause "simplified" licence'){
    return "Licence documentation can be found at [https://choosealicense.com/licenses/bsd-2-clause/]"
    
  }
  if (license === 'No Licence'){
    return ""
  };
}
  //https://www.apache.org/licenses/LICENSE-2.0
  //https://www.gnu.org/licenses/gpl-3.0.en.html
  //https://opensource.org/licenses/MIT
  //https://choosealicense.com/licenses/bsd-2-clause/


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const date = new Date()
const year = date.getFullYear()
function renderLicenseSection(licence) {
  console.log(licence)
  renderLicenseBadge(licence)
  renderLicenseLink(licence)
  return `is licenced under the ${licence}<br>`
          
}

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
  ${data.title} ${renderLicenseSection(data.licence)}
  Copyright © ${year},
  ${renderLicenseBadge(data.licence)}<br>
  ${renderLicenseLink(data.licence)}
  # Author
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
