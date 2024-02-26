const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const team = [];
function internData (){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is intern\'s name?', 
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is intern\'s ID?', 
            name: 'ID',

        },
        {
            type: 'input',
            message: 'What is intern\'s Email address?', 
            name: 'email',

        },
        {
            type: 'input',
            message: 'What is intern\'s school?', 
            name: 'school',
        },
    ])
        .then((data) => {
            
            console.log(data);
            // const manager = new Manager(data.name,data.ID,data.email,data.officeNumber)
            // team.push(manager);
})
}
function engineerData (){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is engineer\'s name?', 
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is engineer\'s ID?', 
            name: 'ID',

        },
        {
            type: 'input',
            message: 'What is engineer\'s Email address?', 
            name: 'email',

        },
        {
            type: 'input',
            message: 'What is engineer\'s github username?', 
            name: 'github',
        },
    ])
        .then((data) => {
            
            console.log(data);
            // const manager = new Manager(data.name,data.ID,data.email,data.officeNumber)
            // team.push(manager);
})
}

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
        .then((data) => {
            
            console.log(data);
            const manager = new Manager(data.name,data.ID,data.email,data.officeNumber)
            team.push(manager);
            console.log(manager)
            console.log(team)
    
    
        inquirer
        .prompt([
            {
                type: 'list',
                message: 'What is next step?', 
                name: 'toDo',
                choices: ['Add an engineer','Add an intern','Finish building the team'],
    
            },])
            .then((response) => {
                if (response.toDo === 'Add an engineer')
                    internData()
                    else if (response.toDo === 'Add an intern')
            })
            
    })
    

}



    managerData();
    
  




// TODO: Write Code to gather information about the development team members, and render the HTML file.

