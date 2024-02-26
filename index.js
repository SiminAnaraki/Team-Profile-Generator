const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const team = [];
function managerData () {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is manager\'s name?', 
            name: 'name',

        },
        {
            type: 'input',
            message: 'What is manager\'s ID?', 
            name: 'ID',

        },
        {
            type: 'input',
            message: 'What is manager\'s Email address?', 
            name: 'email',

        },
        {
            type: 'input',
            message: 'What is manager\'s Office number?', 
            name: 'officeNumber',
        },
    ])
    then((data) => {
        team.push(data)
    })
}
const options = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What is next step?', 
            name: ['Add an engineer','Add an intern','Finish building the team'],

        },])
}

fs.writeFile("team.html","simin", (err) =>
      err ? console.log(err) : console.log('file has been successfully generated!'))
// TODO: Write Code to gather information about the development team members, and render the HTML file.

