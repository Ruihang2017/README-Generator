const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
const generateMarkdown = require("./utils/generateMarkdown.js")

const fileName = "outputREADME.md"

// questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    }, {
        type: 'input',
        name: 'description',
        message: 'Please type the decription for this project?',
    }, {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    }, {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for usage information.',
    }, {
        type: 'input',
        name: 'howToContribute',
        message: "You can include a contribution guidelines. For how to do so. See the [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.",
    }, {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
    }, {
        type: 'input',
        name: 'gitHubUsername',
        message: 'Please type your github user name.',
    }, {
        type: 'input',
        name: 'emailAddress',
        message: 'Please type your email address.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'The last section of a high-quality README file is the license.',
        choices: ['MIT', 'Apache', 'MPL', 'GPL', 'AGPL'],
    }
];

const promptUser = () => {
    return inquirer.prompt(questions);
};

const init = () => {
    promptUser()
        // Use writeFile method imported from fs.promises to use promises instead of
        // a callback function
        .then((answers) => writeFile(fileName, generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

init();


