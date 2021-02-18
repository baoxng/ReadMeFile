//Packages
const inquirer = require('inquirer');
const fs= require ('fs');
const generateMarkdown = require('./utilities/generateMarkdown');

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


