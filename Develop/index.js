// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require ('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a short description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please provide installation instructions for users on using this application',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage guide for this application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who are the contributors to this project if any',
        name: 'contributing',
    },
    {
        type: 'list',
        message: 'What license(s) is required for this project?',
        name: 'license',
        choices: [
            'APACHE 2.0',
            'Artistic 2.0',
            'Boost Software 1.0',
            'BSD 2-Clause',
            'BSD 3-Clause',
            'Creative Commons CCO',
            'Eclipse Public License',
            'GNU GPL v3',
            'GNU GPL v2',
            'GNU AGPL v3',
            'GNU FDL v1.3',
            'IBM Public License 1.0',
            'ISC',
            'MIT',
            'Mozilla Public License 2.0',
            'Open Data Commons Attribution License (BY)',
            'Open Database License (ODbL)',
            'Public Domain Dedication and License (PDDL)',
            'The Perl ',
            'SIL Open Front 1.1',
            'Unlicense',
            'Zlib'
        ]
    },
    {
        type: 'input',
        message: 'Write some  tests for your application  if applicable?',
        name: 'testApp',
    },
    {
        type: 'input',
        message: 'What can be done if there is  an issue?',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please enter your email:',
        name: 'email',
    }
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {

//}
const writeToFile = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    //.then ((response) => {
    //console.log("Generating README...");

    //writeToFile('README.md', generateMarkdown(response), (err) =>
    //err ? console.error(err) : console.log('Successfully saved to README.md!'));
    //});

    .then((response) => writeToFile('ReadME.md', generateMarkdown(response)))
    .then(() => console.log('Successfully saved to ReadME.md!'))
    .catch((err) => console.error(err));
    //writeToFile('README.md', generateMarkdown(response),
}
// Function call to initialize app
init();