//Packages
const inquirer = require('inquirer');
const fs= require ('fs');
const generateMarkdown = require('./utilities/generateMarkdown');

//Prompts and questions
const prompts = [
    {
        type: 'input',
        message: "",
        name: '',
        default: '',
        validate: function(answer) {
            if (answer.length < 1){
                return console.log('Must have a valid GitHub username.')
            }
            return true; 
            }
    },
    {

    }   
]

