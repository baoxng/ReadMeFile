//Packages
const inquirer = require('inquirer');
const fs= require ('fs');
const generateMarkdown = require('./utilities/generateMarkdown');
const api = require('./utilities/api');
const util= require('util');

//Prompts and questions
const prompts = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        default: 'baoxng',
        validate: function(answer) {
            if (answer.length < 1){
                return console.log('Must have a valid GitHub username.')
            }
            return true; 
            }
    },
    {
        type: 'input',
        message: 'What is your Github repo title?',
        name: 'repo',
        default: 'ReadMe-Generator',
        validate: function(answer) {
        if (answer.length < 1){
            return console.log('Must have a valid GitHub repo for badge.')
        }
        return true; 
        }

    },
    {
        type: 'input',
        message: 'Write a brief description of your project.',
        name: 'description',
        default: 'Description',
        validate: function(answer) {
        if (answer.length < 1){
            return console.log('Must have a valid description.')
        }
        return true; 
        }

    },
    {
        type: 'input',
        message: 'What are the steps to install your project? (Be detailed)',
        default: 'installation',
    },
    {
        type: 'input',
        message: 'Provide detail usage and example of your repo in this section.',
        default: 'usage'
    },   
    {
        type: 'input',
        message: 'Provide details on contributors and how others can contribute to your project.',
        default: 'contributing'
    }, 
    {
        type: 'input',
        message: 'Provide details on any test written for your project.',
        default: 'tests'
    },        
    {
        type: 'list',
        message: 'Choose one of the following licensing for your project.',
        choices: ['Apache License 2.0','Boost Software License 1.0','GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3','MIT','Mozilla Public License 2.0','The Unlicense'],
        name: 'license'
    }   
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Success! Your README.md file has been generated")
    });
}


const writeFileAsync = util.promisify(writeToFile);


// Main function
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponse = await inquirer.prompt(prompts);
        console.log("Your responses: ", userResponse);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        // Call GitHub api for user info
        const userInfo = await api.getUser(userResponse);
        console.log("Your GitHub user info: ", userInfo);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponse, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

init();