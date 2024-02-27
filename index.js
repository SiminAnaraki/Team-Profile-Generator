const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// Initialize an empty array to store team members
const team = [];

// Function to gather information about an intern
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

// Function to gather information about an engineer
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
// Function to present options to the user and take necessary actions
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
                        const htmlContent = render(team)
                        if (!fs.existsSync(OUTPUT_DIR)) {
                            fs.mkdirSync(OUTPUT_DIR);
                        }
                        fs.writeFile(outputPath,htmlContent, (err) =>
                            err ? console.log(err) : console.log('file has been successfully generated!'))}
            })

}
// Function to gather information about the manager and start the application
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
// Start the application by gathering information about the manager
    askUser();
   
    
  




// TODO: Write Code to gather information about the development team members, and render the HTML file.

