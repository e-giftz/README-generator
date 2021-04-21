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
            '',
            'APACHE',
            'Artistic 2.0',
            'Boost 1.0',
            'BSD 2--Clause',
            'BSD 3--Clause',
            'CCO 1.0',
            'EPL 1.0',
            'GPL v3',
            'GPL v2',
            'AGPL v3',
            'FDL v1.3',
            'IPL 1.0',
            'ISC',
            'MIT',
            'MPL 2.0',
            'ODC_BY',
            'ODbL',
            'PDDL',
            'Perl ',
            'OFL 1.1',
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
//function writeToFile(fileName, data) {}
const writeToFile = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => writeToFile('ReadME.md', generateMarkdown(response)))
    .then(() => console.log('Successfully saved to ReadME.md!'))
    .catch((err) => console.error(err));
    //writeToFile('README.md', generateMarkdown(response),
}
// Function call to initialize app
init();