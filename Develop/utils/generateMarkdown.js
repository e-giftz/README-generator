// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
    const licenseBadge = 'https://img.shields.io/badge/license-' + license.license + '-important.svg'
    if (license.license !== "") {
        return `![badge](<${licenseBadge}>)`;
    } else {
        return "";
    }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const licenseLink = 'https://spdx.org/licenses/' + license.license + '.html'
    if (license.license !== "") {
        return `[Link to License Details](<${licenseLink}>)`;
    } else {
        return "";
    }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
    //const licenseSection = 'https://spdx.org/licenses/' + license.license + '.html'
    if (license.license !== "") {
        return `This application is covered under the ${license.license} license.<br />![badge](<https://img.shields.io/badge/license-${license.license}-important.svg>)
        <br /> `;   
    } else {
        return "";
    }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

    return `
# ${data.title}

${renderLicenseBadge(data)}<br />
${renderLicenseLink(data)}
    
## Description 
${data.description}

## Table of Content
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Licenses](#license)
- [Contributing](#contributing)
- [Test](#testApp)
- [Questions](#questions)
    
## Installation
${data.installation}
     
## Usage
${data.usage}
       
## License
> ${renderLicenseSection(data)}
     
## Contributing
${data.contributing}
      
## Tests
${data.testApp}

## Questions
Please email or reach me on GitHub if you have any questions<br />
>Find me on GitHub: [${data.username}]('https://github.com/${data.username}')<br />
>✉️ Email me with any additional questions: ${data.email}`;
}

module.exports = generateMarkdown;

