
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return "[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache-red.svg)](https://opensource.org/license/apache-2-0/)";
    case "MPL":
      return "[![License](https://img.shields.io/badge/License-MPL-yellow.svg)](https://opensource.org/license/mpl-2-0/)";
    case "GPL":
      return "[![License](https://img.shields.io/badge/License-GPL-green.svg)](https://opensource.org/license/gpl-2-0/)";
    case "AGPL":
      return "[![License](https://img.shields.io/badge/License-AGPL-purple.svg)](https://opensource.org/license/agpl-v3/)";
    default:
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseSection(data.license)}
  # ${data.title}
  ## Description 
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  This project is licensed under the ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.howToContribute}
  ## Tests
  ${data.tests}
  ## Questions
  ![githubIcon](./assest/icon/github.svg) Github: https://github.com/${data.gitHubUsername}\n
  ![emailIcon](./assest/icon/envelope.svg)  Email: ${data.emailAddress}`;
}

module.exports = generateMarkdown;
