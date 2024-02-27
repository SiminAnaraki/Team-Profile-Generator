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
const internData = () => {
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
            validate: function(email) {
                // Regular expression to validate email format
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailRegex.test(email)) {
                    return true;
                }
                return 'Please enter a valid email address';
            }

        },
        {
            type: 'input',
            message: 'What is intern\'s school?', 
            name: 'school',
        },
    ])
        .then((data) => {
            const intern = new Intern (data.name,data.ID,data.email,data.school)
            team.push(intern);
            options()
})
}
const engineerData = () => {
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
            
            const enginner = new Engineer(data.name,data.ID,data.email,data.github)
            team.push(enginner);
            options()
})
}
const options = () =>{
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What is next step?', 
                name: 'toDo',
                choices: ['Add an engineer','Add an intern','Finish building the team'],
    
            },])
            .then((response) => {
                if (response.toDo === 'Add an engineer'){
                    engineerData()}
                    else if (response.toDo === 'Add an intern'){
                        internData()
                    }
                    else {
                    fs.writeFile("team.html",render(team), (err) =>
                    err ? console.log(err) : console.log('file has been successfully generated!'))}
            })

}
const askUser = () => {
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
            
            const manager = new Manager(data.name,data.ID,data.email,data.officeNumber)
            manager.getName()
            team.push(manager);
            options()
    })
}
    askUser();
   
    
  




// TODO: Write Code to gather information about the development team members, and render the HTML file.

