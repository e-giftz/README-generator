// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    return `
# ${data.title}

![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    
## Description 
${data.description}

## Table of Content
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Licenses](#license)
-[Contributing](#contributing)
-[Test](#testApp)
-[Questions](#questions)
    
## Installation
${data.installation}
     
## Usage
${data.usage}
       
## License
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    
This application is covered by the ${data.license} license. 
     
## Contributing
${data.contributing}
      
## Tests
${data.testApp}

## Questions
${data.questions}

    
Find me on GitHub: [${data.username}](https://github.com/${data.username})
✉️ Email me with any questions: ${data.email}`;
}

module.exports = generateMarkdown;
